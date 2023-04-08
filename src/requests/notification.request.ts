import { FetchAcceptedNotificationParams } from '../entities';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetAcceptedInvitationNotificationResponse } from '../responses';

export class NotificationRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getAcceptedInvitationNotifications({
    limit,
    skip,
    notificationDateFrom,
    notificationDateTo,
  }: FetchAcceptedNotificationParams): Promise<GetAcceptedInvitationNotificationResponse> {
    const queryParams = {
      decorationId: 'com.linkedin.voyager.dash.deco.relationships.invitationAcceptanceNotificationCardsCollection-40',
      lastUpdateTimeRange: `(start:${notificationDateFrom},end:${notificationDateTo})`,
      q: 'lastUpdateTimeRange',
      start: skip,
      count: limit,
    };
    return this.request.get('voyagerRelationshipsDashInvitationAcceptanceNotificationCards', {
      params: queryParams,
    });
  }
}
