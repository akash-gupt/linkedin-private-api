import { MiniProfile } from './mini-profile.entity';

export interface FeedHit {
  liked?: boolean;
  threadUrn?: string;
  activityUrn?: string;
  totalComments?: number;
  totalShares?: number;
  totalLikes?: number;
  postText?: string;
  miniProfile?: MiniProfile;
}
