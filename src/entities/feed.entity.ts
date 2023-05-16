import { LinkedinDescription, LinkedinHeaderImage } from './common.entity';

export const FEED_TYPE = 'com.linkedin.voyager.feed.render.UpdateV2';

export interface LinkedinFeed {
  $type: typeof FEED_TYPE;
  dashEntityUrn: string;
  // showSocialDetail: null;
  // socialContent: null;
  // footer: null;
  // desktopPromoUpdate: null;
  // carouselContent: null;
  // content: Content;
  updateMetadata: UpdateMetadata;
  // detailHeader: null;
  entityUrn: string;
  // leadGenFormContent: null;
  // annotation: null;
  // contextualHeader: null;
  // resharedUpdate: null;
  // interstitial: null;
  // contextualDescriptionV2: null;
  // leadGenFormContentV2: null;
  // contextualDescription: null;
  // aggregatedContent: null;
  actor: Actor;
  // relatedContent: null;
  '*socialDetail': string;
  header: Header;
  highlightedComments: null;
  commentary: Commentary;
  additionalContents: null;
}

export interface Actor {
  urn: string;
  image: ActorImage;
  navigationContext: NavigationContext;
  followAction: FollowAction;
  $type: string;
}

export interface FollowAction {
  unfollowTrackingActionType: string;
  followTrackingActionType: string;
  companyFollowingTrackingContext: string;
  '*followingInfo': string;
  type: string;
  trackingActionType: string;
  $type: string;
}

export interface ActorImage {
  attributes: PurpleAttribute[];
  accessibilityTextAttributes: any[];
  $type: string;
}

export interface PurpleAttribute {
  sourceType: string;
  '*miniCompany': string;
  $type: string;
}

export interface NavigationContext {
  actionTarget: string;
  trackingActionType: string;
  accessibilityText: string;
  $type: string;
}

export interface Commentary {
  templateType: string;
  numLines: number;
  text: LinkedinDescription;
  $type: 'com.linkedin.voyager.feed.render.TextComponent';
}

export interface Content {
  headlineBackgroundColor: string;
  mediaDisplayVariant: string;
  '*videoPlayMetadata': string;
  tapTargets: any[];
  $type: string;
}

export interface Header {
  image: LinkedinHeaderImage;
  navigationContext: NavigationContext;
  text: LinkedinDescription;
  imageNavigationContext: NavigationContext;
  $type: 'com.linkedin.voyager.feed.render.HeaderComponent';
}

export interface UpdateMetadata {
  urn: string;
  actionsPosition: string;
  actionTriggerEnabled: boolean;
  '*updateActions': string;
  detailPageType: string;
  '*hidePostAction': string;
  shareAudience: string;
  shareUrn: string;
  excludedFromSeen: boolean;
  trackingData: TrackingData;
  $type: string;
}

export interface TrackingData {
  requestId: string;
  trackingId: string;
  $type: string;
}
