import { getIdFromUrn, zipJson } from '../utils';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetOwnProfileResponse } from '../responses/own-profile.response.get';
import { GetProfileResponse } from '../responses/profile.response.get';
import { GetIndividualProfileResponse, GetProfileNetworkInfoResponse } from '../responses';
import { MINI_PROFILE_TYPE } from '../entities';

export class ProfileRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getProfile({ publicIdentifier }: { publicIdentifier: string }): Promise<GetProfileResponse> {
    const queryParams = {
      q: 'memberIdentity',
      memberIdentity: publicIdentifier,
      decorationId: 'com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities-35',
    };

    return this.request.get<GetProfileResponse>('identity/dash/profiles', {
      params: queryParams,
    });
  }

  /**
   *
   * @param id Public id or urn id
   * @returns
   */
  async getIndividualProfile(id: string): Promise<GetIndividualProfileResponse> {
    return this.request.get<GetIndividualProfileResponse>(`identity/profiles/${id}`);
  }

  getOwnProfile(): Promise<GetOwnProfileResponse> {
    return this.request.get<GetOwnProfileResponse>('me');
  }

  async track(eventBody: any, eventInfo: any): Promise<boolean> {
    const payload = [{ eventBody, eventInfo }];
    await this.request.post('/li/track', JSON.stringify(payload), {
      headers: {
        accept: '*/*',
        'content-type': 'text/plain;charset=UTF-8',
      },
    });
    return true;
  }

  async getProfileNetworkInfo(publicProfileId: string): Promise<GetProfileNetworkInfoResponse> {
    return this.request.get<GetProfileNetworkInfoResponse>(`identity/profiles/${publicProfileId}/networkinfo`, {
      headers: {
        accept: 'application/vnd.linkedin.normalized+json+2.1',
      },
    });
  }

  async viewProfile(
    publicProfileId: string,
    targetProfileMemberUrnId: string | null = null,
    networkDistance: number | null = null,
  ): Promise<boolean> {
    const myProfile = await this.getOwnProfile();

    if (!targetProfileMemberUrnId) {
      const profile = await this.getIndividualProfile(publicProfileId);
      const miniProfile = profile?.included?.find(r => r.$type === MINI_PROFILE_TYPE);

      if (miniProfile?.objectUrn) {
        targetProfileMemberUrnId = getIdFromUrn(miniProfile?.objectUrn);
      }
    }

    if (!networkDistance) {
      const profileNetworkInfo = await this.getProfileNetworkInfo(publicProfileId);
      networkDistance = parseInt(profileNetworkInfo.data.distance.value.split('_')[1], 10);
    }

    const viewerPrivacySetting = 'F';
    const myMemberId = myProfile.data.plainId;
    const currentTimeInSeconds = Date.now();
    const metadata = await this.request.auth.getMetadata();
    const clientApplicationInstance = metadata.clientApplicationInstance;
    const clientPageInstanceId = metadata.clientPageInstanceId;
    const trackingId = metadata.clientApplicationInstance?.trackingId;

    const eventBody = {
      viewerPrivacySetting,
      networkDistance: networkDistance,
      vieweeMemberUrn: `urn:li:member:${targetProfileMemberUrnId}`,
      profileTrackingId: clientPageInstanceId,
      entityView: {
        viewType: 'profile-view',
        viewerId: Number(myMemberId),
        targetId: Number(targetProfileMemberUrnId),
      },
      header: {
        pageInstance: {
          pageUrn: 'urn:li:page:d_flagship3_profile_view_base',
          trackingId: trackingId,
        },
        time: currentTimeInSeconds, // Use imported time function
        version: clientApplicationInstance?.version,
        clientApplicationInstance: clientApplicationInstance,
      },
      requestHeader: {
        interfaceLocale: 'en_US',
        pageKey: 'd_flagship3_profile_view_base',
        path: `/in/${targetProfileMemberUrnId}/`,
        referer: 'https://www.linkedin.com/feed/',
      },
    };

    const event = {
      eventBody,
      eventInfo: {
        appId: 'com.linkedin.flagship3.d_web',
        eventName: 'ProfileViewEvent',
        topicName: 'ProfileViewEvent',
      },
    };

    await this.track(event.eventBody, event.eventInfo);
    return true;
  }
}
