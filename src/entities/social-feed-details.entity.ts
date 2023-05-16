export const FEED_SOCIAL_DETAIL_TYPE = 'com.linkedin.voyager.feed.SocialDetail';

export interface LinkedinFeedSocialDetail {
  $type: typeof FEED_SOCIAL_DETAIL_TYPE;
  hideSocialCountsIfAllowed: null;
  dashEntityUrn: string;
  quickComments: null;
  socialPermissionsPersonalTopicUrn: null;
  liked: boolean;
  '*socialPermissions': string;
  threadId: string;
  pillText: null;
  feedDetailSocialActionPromptType: null;
  entityUrn: string;
  socialUpdateType: null;
  reactionsTopicUrn: null;
  showReplyPrivatelyButton: null;
  likes: Comments;
  updateSaveAction: null;
  reactionElements: null;
  comments: Comments;
  detailPageUpdateUrn: null;
  '*totalSocialActivityCounts': string;
  showPremiumAnalytics: boolean;
  hideFirstPrompt: boolean;
  showShareButton: boolean;
  totalShares: number;
  urn: string;
  allowedCommentersScope: string;
  reactionsOnCommentsTopicUrn: null;
  commentingDisabled: boolean;
  reactionSummariesTopicUrn: null;
  companyActor: null;
  commentsTopicUrn: null;
  reshareUpdateUrn: null;
  socialDetailsTopicUrn: null;
  commentSocialPermissionsTopicUrn: null;
  pillNavigationContext: null;
  detailPageNavigationContext: null;
}

export interface Comments {
  paging: Paging;
  elements: any[];
  $type: string;
}

export interface Paging {
  start: number;
  count: number;
  total: number;
  links: any[];
  $type: string;
}
