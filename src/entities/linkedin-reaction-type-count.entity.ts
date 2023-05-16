import { FeedReactionType } from '../types';

export interface LinkedInReactionTypeCountModel {
  $type: 'com.linkedin.voyager.feed.social.ReactionTypeCount';
  count: number;
  reactionType: FeedReactionType;
}
