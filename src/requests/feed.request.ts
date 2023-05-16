import { GetFeedsResponse } from '../responses/feed.response.get';
import { LinkedInRequest } from '../core/linkedin-request';
import { FeedReactionType } from '../types';

export class FeedRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getFeeds({ skip = 0, limit = 100 } = {}): Promise<GetFeedsResponse> {
    const queryParams = {
      start: skip,
      count: limit,
      moduleKey: 'home-feed%3Adesktop',
      q: 'feed',
      sortOrder: 'RELEVANCE',
    };

    return this.request.get<GetFeedsResponse>('feed/updatesV2', {
      params: queryParams,
    });
  }

  private feedReaction({
    threadUrn,
    action,
    reactionType = FeedReactionType.LIKE,
  }: {
    reactionType?: FeedReactionType;
    threadUrn: string;
    action?: 'updateReaction' | 'deleteReaction';
  }) {
    const body: Record<string, string> = {
      reactionType,
    };

    if (action) {
      delete body.reactionType;
      body.threadUrn = threadUrn;
    }

    if (action === 'updateReaction') {
      body.newReactionType = reactionType;
    }

    return this.request.post('voyagerSocialDashReactions', body, { params: { threadUrn: encodeURIComponent(threadUrn) } });
  }

  async addFeedReaction({
    threadUrn,
    reactionType = FeedReactionType.LIKE,
  }: {
    reactionType?: FeedReactionType;
    threadUrn: string;
  }): Promise<void> {
    await this.feedReaction({ threadUrn, reactionType });
  }

  async removeFeedReaction({ threadUrn }: { threadUrn: string }): Promise<void> {
    await this.feedReaction({ threadUrn, action: 'deleteReaction' });
  }

  async updateFeedReaction({
    threadUrn,
    reactionType = FeedReactionType.LIKE,
  }: {
    reactionType: FeedReactionType;
    threadUrn: string;
  }): Promise<void> {
    await this.feedReaction({ threadUrn, action: 'updateReaction', reactionType });
  }
}
