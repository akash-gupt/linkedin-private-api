import { FeedHit } from '../entities';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchFeed = ({ skip, limit }: { skip?: number; limit?: number }) => Promise<FeedHit[]>;

export class FeedScroller extends SkipLimitScroller<FeedHit> {
  private fetchFeed: FetchFeed;

  constructor({ fetchFeed, skip = 0, limit = 10 }: { fetchFeed: FetchFeed; skip?: number; limit?: number; keywords?: string }) {
    super({ limit, skip });
    this.fetchFeed = fetchFeed;
  }

  async fetch(): Promise<FeedHit[]> {
    return this.fetchFeed({ skip: this.skip, limit: this.limit });
  }
}
