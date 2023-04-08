import { Client } from '../core';
import { NotificationScroller } from '../scrollers/notification.scroller';
import { transformHeaderImageToProfileId, transformToProfileIdentifier } from '../utils';
import { GetAcceptedInvitationNotificationResponse } from '../responses';
import { AcceptedInvitationNotificationHit, FetchAcceptedNotificationParams } from '../entities';
import { LinkedinNotification } from '../entities/notification.entity';

const transformNotifications = (response: GetAcceptedInvitationNotificationResponse): AcceptedInvitationNotificationHit[] => {
  const notificationUrns = response.data.elements.map(item => item.notificationCardUrn);
  const notifications = response.included.filter(item => notificationUrns.some(urn => urn === item.entityUrn));
  return notifications.map(notification => ({
    publishedAt: notification?.publishedAt,
    profileId: transformHeaderImageToProfileId(notification.headerImage),
    publicIdentifier: transformToProfileIdentifier(notification.headerImage.actionTarget),
    headlineText: notification.headline?.text,
    $type: 'com.linkedin.voyager.dash.identity.notifications.Card',
  }));
};

export class NotificationRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  getAcceptedInvitationNotifications(params: FetchAcceptedNotificationParams): NotificationScroller {
    return new NotificationScroller({
      ...params,
      fetchAcceptedInvitationNotifications: this.fetchAcceptedInvitationNotifications.bind(this),
    });
  }

  async fetchAcceptedInvitationNotifications(params: FetchAcceptedNotificationParams): Promise<LinkedinNotification[]> {
    const response = await this.client.request.notification.getAcceptedInvitationNotifications(params);
    return transformNotifications(response);
  }
}
