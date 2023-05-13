import { HeaderImage, Headline, CardAction, SettingOption, Action } from '../entities';
import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
export interface FetchAcceptedNotificationIncludedItem {
  contentImages: any[];
  objectUrn: string;
  settingTooltipTrackingId?: any;
  tertiaryAction?: any;
  settingTooltipText?: any;
  entityUrn: string;
  headerImage: HeaderImage;
  subHeadline?: any;
  tertiaryImage?: any;
  kickerIcon?: any;
  kickerText?: any;
  headline: Headline;
  contentType?: any;
  trackingId: string;
  read: boolean;
  publishedAt: number;
  contentAccessibilityText: string;
  contentAction?: any;
  insightType?: any;
  $recipeTypes: string[];
  surveyDisplayTrigger?: any;
  socialActivityCountsUrn?: any;
  $type: string;
  insight?: any;
  insightAction?: any;
  contentSecondaryText: any[];
  additionalContentImagesCount: number;
  cardAction: CardAction;
  settingOptions: SettingOption[];
  contentPrimaryText: any[];
  actions: Action[];
  tertiaryText?: any;
}
export interface AcceptedNotificationElementItem {
  '*notificationCard': string;
  notificationCardUrn: string;
  $recipeTypes: ['com.linkedin.voyager.dash.deco.relationships.InvitationAcceptanceNotificationCard'];
  $type: 'com.linkedin.voyager.dash.relationships.invitation.InvitationAcceptanceNotificationCard';
}
export interface AcceptedInvitationNotificationMeta {
  nextStart: number;
  $recipeTypes: ['com.linkedin.voyager.dash.deco.relationships.InvitationAcceptanceNotificationsMetadata'];
  $type: 'com.linkedin.voyager.dash.relationships.invitation.InvitationAcceptanceNotificationsMetadata';
}
export type GetAcceptedInvitationNotificationResponse = LinkedInCollectionResponse<
  AcceptedNotificationElementItem,
  FetchAcceptedNotificationIncludedItem,
  AcceptedInvitationNotificationMeta
>;
