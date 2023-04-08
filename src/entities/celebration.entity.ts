import { HeaderImage } from './common.entity';
export declare type CelebrationId = string;
export declare enum CelebrationEnum {
  BIRTHDAY = 'birthdays',
  WORK_ANNIVERSARY = 'work_anniversaries',
  JOB_CHANGE = 'job_changes',
}
export interface CelebrationImage {
  $type: string;
  entityUrn: string;
}
interface CelebrationConfirmationActionAttribute {
  text: string;
  type: 'SUCCESS';
  $type: 'com.linkedin.voyager.dash.common.ux.InlineFeedbackViewModel';
}
interface CelebrationMessageActionAttribute {
  prefilledMessage: string;
  $type: 'com.linkedin.voyager.dash.props.actions.MessageAction';
}
interface CelebrationActionAttribute {
  $recipeTypes: string[];
  $type: 'com.linkedin.voyager.dash.props.PropActionAttribute';
  action: {
    confirmationAction: CelebrationConfirmationActionAttribute | null;
    messageAction: CelebrationMessageActionAttribute | null;
  };
}
export interface Celebration {
  objectUrn: string;
  headerImage: HeaderImage;
  actions: CelebrationActionAttribute[];
  publishedAt: number;
  subHeadline: {
    text: string;
  };
  cardAction: {
    displayAction: string;
  };
}
export {};
