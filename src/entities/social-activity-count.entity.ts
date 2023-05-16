import { LinkedInReactionTypeCountModel } from './linkedin-reaction-type-count.entity';
import { LinkedInTextViewModel } from './linkedin-text-view-model.entity';

export const SOCIAL_ACTIVITY_COUNT_TYPE = 'com.linkedin.voyager.feed.shared.SocialActivityCounts';

export interface LinkedinSocialActivityCount {
  socialDetailEntityUrn: string;
  reactionText: LinkedInTextViewModel;
  dashEntityUrn: string;
  reactionByOrganizationActor: null;
  numLikes: number;
  liked: boolean;
  numViews: number;
  $type: typeof SOCIAL_ACTIVITY_COUNT_TYPE;
  urn: string;
  numComments: number;
  reactionTypeCounts: LinkedInReactionTypeCountModel[];
  likedByOrganizationActor: null;
  entityUrn: string;
  numShares: number;
  numImpressions: null;
  reacted: null;
}
