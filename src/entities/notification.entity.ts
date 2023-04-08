export interface LinkedinNotification {
  $type: 'com.linkedin.voyager.dash.identity.notifications.Card';
  publishedAt: number;
  profileId: string;
  publicIdentifier: string;
  headlineText: string;
}
