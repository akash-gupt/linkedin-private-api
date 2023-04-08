import { Celebration, CelebrationEnum, CelebrationHit, CelebrationImage } from '../entities';
import { Client } from '../core';
import { CelebrationScroller } from '../scrollers';
import _ from 'lodash';
import { transformHeaderImageToProfileId, transformToProfileIdentifier } from '../utils';

const actionToUrn = (participant: string) => decodeURIComponent(participant.replace('/feed/update/', ''));

export class CelebrationsRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  getCelebrations({
    type = CelebrationEnum.WORK_ANNIVERSARY,
    skip = 0,
    limit = 10,
  }: {
    type: CelebrationEnum;
    skip?: number;
    limit?: number;
  }): CelebrationScroller {
    return new CelebrationScroller({
      type,
      skip,
      limit,
      fetchCelebration: this.fetchCelebrations.bind(this),
    });
  }

  async fetchCelebrations({
    type = CelebrationEnum.WORK_ANNIVERSARY,
    skip = 0,
    limit = 10,
  }: {
    type: CelebrationEnum;
    skip?: number;
    limit?: number;
  }): Promise<CelebrationHit[]> {
    const response = await this.client.request.celebrations.getCelebrations(type, {
      skip,
      limit,
    });
    const profileIdentities = response.included
      .filter(item => _.get(item, '$type') === 'com.linkedin.voyager.dash.identity.profile.Profile')
      .map(item => item as CelebrationImage);
    const celebrationIdentities = response.included
      .filter(item => _.get(item, '$type') === 'com.linkedin.voyager.dash.props.PropCard')
      .map(item => item as Celebration);
    const profileUserIds = celebrationIdentities
      .filter(item => profileIdentities.some(id => id.entityUrn === item.headerImage.attributes[0].detailData['*profilePicture']))
      .filter(item => !item.actions.some(action => action?.action.confirmationAction))
      .map(item => {
        let predefinedMessage;
        for (const action of item.actions) {
          const messageAction = action?.action?.messageAction;
          if (messageAction?.prefilledMessage) {
            predefinedMessage = messageAction.prefilledMessage;
            break;
          }
        }

        return {
          publishedAt: item?.publishedAt,
          textDate: item?.subHeadline?.text,
          predefinedMessage,
          publicIdentifier: transformToProfileIdentifier(item?.headerImage?.actionTarget),
          profileId: transformHeaderImageToProfileId(item?.headerImage),
          postUrn: actionToUrn(item?.cardAction?.displayAction),
        };
      });

    return _.orderBy(profileUserIds, 'publishedAt', 'desc');
  }
}
