import { Celebration, CelebrationImage, LinkedInCelebrationCollectionResponse } from '../entities';
interface CelebrationMetadata {
  $recipeTypes: string[];
  $type: 'com.linkedin.voyager.dash.props.PropsHomeCardsMetadata';
  nextStart: number;
}
interface CelebrationElement {
  $recipeTypes: string[];
  $type: 'com.linkedin.voyager.dash.props.PropsHomeCardsMetadata';
  propsHomeCard: {
    '*propCard': string;
  };
}
export declare type GetCelebrationsResponse = LinkedInCelebrationCollectionResponse<
  CelebrationElement,
  Celebration | CelebrationImage,
  CelebrationMetadata
>;
export {};
