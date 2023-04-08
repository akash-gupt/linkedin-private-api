import { AcceptedInvitationNotificationHit, FetchAcceptedNotificationParams } from '../entities';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchAcceptedInvitationNotifications = (
  params: FetchAcceptedNotificationParams,
) => Promise<AcceptedInvitationNotificationHit[]>;

export class NotificationScroller extends SkipLimitScroller<AcceptedInvitationNotificationHit> {
  private notificationDateFrom!: number;

  private notificationDateTo!: number;

  private fetchAcceptedInvitationNotifications!: FetchAcceptedInvitationNotifications;

  constructor({
    fetchAcceptedInvitationNotifications,
    skip = 0,
    limit = 10,
    notificationDateFrom,
    notificationDateTo,
  }: {
    fetchAcceptedInvitationNotifications: FetchAcceptedInvitationNotifications;
  } & FetchAcceptedNotificationParams) {
    super({ skip, limit });
    this.fetchAcceptedInvitationNotifications = fetchAcceptedInvitationNotifications;
    this.notificationDateFrom = notificationDateFrom;
    this.notificationDateTo = notificationDateTo;
  }

  async fetch(): Promise<AcceptedInvitationNotificationHit[]> {
    return this.fetchAcceptedInvitationNotifications({
      skip: this.skip,
      limit: this.limit,
      notificationDateFrom: this.notificationDateFrom,
      notificationDateTo: this.notificationDateTo,
    });
  }
}
