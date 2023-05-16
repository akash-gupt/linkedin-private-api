export const INVITATION_SUMMARY_TYPE = 'com.linkedin.voyager.relationships.invitation.InvitationsSummary';
export interface LinkedInInvitationSummary {
  $type: typeof INVITATION_SUMMARY_TYPE;
  customMessage: boolean;
  entityUrn: string;
  notableInvitationSetting?: string;
  notableInvitationSettingAvailable?: string;
  numNewInvitations: number;
  numNotableInvitations?: string;
  numPendingInvitations: number;
  numSingleSentInvitations: number;
  numTotalSentInvitations: number;
}
