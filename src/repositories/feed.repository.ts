import { Client } from '../core';
import { FeedScroller } from '../scrollers';
import { FeedHit } from '../entities';
import { transformFeed } from '../transformer';
import { FeedReactionType } from '../types';

export class FeedRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  getFeed({ skip = 0, limit = 10 }: { skip?: number; limit?: number }): FeedScroller {
    return new FeedScroller({
      skip,
      limit,
      fetchFeed: this.fetchFeed.bind(this),
    });
  }

  async fetchFeed({ skip = 0, limit = 10 }: { skip?: number; limit?: number }): Promise<FeedHit[]> {
    const response = await this.client.request.feed.getFeeds({
      skip,
      limit,
    });

    return transformFeed(response);
  }

  async addFeedReaction({
    threadUrn,
    reactionType = FeedReactionType.LIKE,
  }: {
    reactionType?: FeedReactionType;
    threadUrn: string;
  }): Promise<void> {
    await this.client.request.feed.addFeedReaction({
      threadUrn,
      reactionType,
    });
  }

  async removeFeedReaction({ threadUrn }: { threadUrn: string }): Promise<void> {
    await this.client.request.feed.removeFeedReaction({
      threadUrn,
    });
  }

  async updateFeedReaction({
    threadUrn,
    reactionType = FeedReactionType.LIKE,
  }: {
    reactionType: FeedReactionType;
    threadUrn: string;
  }): Promise<void> {
    await this.client.request.feed.updateFeedReaction({
      threadUrn,
      reactionType,
    });
  }
}
