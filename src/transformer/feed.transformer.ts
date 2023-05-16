import { LinkedinSocialActivityCount, SOCIAL_ACTIVITY_COUNT_TYPE } from '../entities/social-activity-count.entity';
import {
  FEED_SOCIAL_DETAIL_TYPE,
  FEED_TYPE,
  FeedHit,
  LinkedInMiniProfile,
  LinkedinFeed,
  LinkedinFeedSocialDetail,
  MINI_PROFILE_TYPE,
} from '../entities';
import { GetFeedsResponse } from '../responses/feed.response.get';
import { transformMiniProfile } from '../repositories';
import { formatText } from '../utils';

export const transformFeed = (response: GetFeedsResponse): FeedHit[] => {
  const { included = [] } = response;
  const feeds = included.filter(item => item.$type === FEED_TYPE).map(item => item as LinkedinFeed);

  const miniProfiles = included.filter(item => item.$type === MINI_PROFILE_TYPE).map(item => item as LinkedInMiniProfile);
  const socialActivityCounts = included
    .filter(item => item.$type === SOCIAL_ACTIVITY_COUNT_TYPE)
    .map(item => item as LinkedinSocialActivityCount);

  const socialDetails = included
    .filter(item => item.$type === FEED_SOCIAL_DETAIL_TYPE)
    .map(item => item as LinkedinFeedSocialDetail);

  const newResponse: FeedHit[] = feeds.map(item => {
    const socialActivityCount = socialActivityCounts.find(
      activityItem => activityItem.socialDetailEntityUrn === item['*socialDetail'],
    );

    const miniProfile = miniProfiles.find(profile => profile.objectUrn === item.actor.urn);
    const socialDetail = socialDetails.find(detail => detail.entityUrn === item['*socialDetail']);

    return {
      liked: socialActivityCount?.liked ?? false,
      threadUrn: socialDetail?.urn,
      activityUrn: item.updateMetadata.urn,
      totalComments: socialActivityCount?.numComments,
      totalShares: socialActivityCount?.numShares,
      totalLikes: socialActivityCount?.numLikes,
      miniProfile: miniProfile ? transformMiniProfile(miniProfile) : undefined,
      postText: formatText(item.commentary.text.text),
    };
  });

  return newResponse;
};
