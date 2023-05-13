import { LinkedInRequest } from '../core/linkedin-request';
import { GetReceivedInvitationResponse } from '../responses/received-invitations.response.get';
import { GetSentInvitationResponse, GetSentInvitationSummaryResponse } from '../responses/sent-invitations.response.get';

export class InvitationRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  sendInvitation({ profileId, trackingId, message }: { profileId: string; trackingId: string; message?: string }): Promise<void> {
    const requestPayload = {
      trackingId,
      emberEntityName: 'growth/invitation/norm-invitation',
      invitee: {
        'com.linkedin.voyager.growth.invitation.InviteeProfile': {
          profileId,
        },
      },
      ...(message && { message }),
    };

    return this.request.post('growth/normInvitations', requestPayload);
  }

  getReceivedInvitations({ skip = 0, limit = 100 } = {}): Promise<GetReceivedInvitationResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      q: 'receivedInvitation',
    };

    return this.request.get<GetReceivedInvitationResponse>('relationships/invitationViews', {
      params: queryParams,
    });
  }

  getSentInvitations({ skip = 0, limit = 100 } = {}): Promise<GetSentInvitationResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      invitationType: 'CONNECTION',
      q: 'invitationType',
    };

    return this.request.get<GetSentInvitationResponse>('relationships/sentInvitationViewsV2', {
      params: queryParams,
    });
  }

  getSentInvitationsSummary(): Promise<GetSentInvitationSummaryResponse> {
    const queryParams = {
      types: 'List(SENT_INVITATION_COUNT,PENDING_INVITATION_COUNT,UNSEEN_INVITATION_COUNT,PENDING_INVITATION_BY_FACET_COUNT)',
    };
    return this.request.get('relationships/invitationsSummaryV2', {
      params: queryParams,
    });
  }

  cancelSendInvitation(entityUrns: string[]): Promise<void> {
    const queryParams = {
      action: 'closeInvitations',
    };
    const actionData = entityUrns.map(entityUrn => {
      return { entityUrn: entityUrn, genericInvitation: false, genericInvitationType: 'CONNECTION' };
    });
    const body = { inviteActionType: 'ACTOR_WITHDRAW', inviteActionData: actionData };
    return this.request.post('relationships/invitations', body, {
      params: queryParams,
    });
  }
}
