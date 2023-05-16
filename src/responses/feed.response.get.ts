import { LinkedinFeed } from '../entities/feed.entity';
import { LinkedInCollectionResponse, LinkedInMiniProfile, LinkedinFeedSocialDetail } from '../entities';
import { LinkedinSocialActivityCount } from '../entities/social-activity-count.entity';

export interface GetFeedsMetadata {
  paginationToken: string;
  newRelevanceFeed: boolean;
  id: string;
  paginationTokenExpiryTime: number;
  sort: string;
  type: string;
  preferredSortSetting: string;
  queryAfterTime: number;
  $type: string;
}

export type GetFeedsResponse = LinkedInCollectionResponse<
  string,
  LinkedinFeed | LinkedinSocialActivityCount | LinkedInMiniProfile | LinkedinFeedSocialDetail,
  GetFeedsMetadata
>;
