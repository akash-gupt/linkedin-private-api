import { CelebrationEnum, CelebrationHit } from '../entities';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchCelebration = ({
  type,
  skip,
  limit,
}: {
  type: CelebrationEnum;
  skip?: number;
  limit?: number;
}) => Promise<CelebrationHit[]>;

export class CelebrationScroller extends SkipLimitScroller<CelebrationHit> {
  private fetchCelebration: FetchCelebration;

  type: CelebrationEnum;

  constructor({
    fetchCelebration,
    type = CelebrationEnum.WORK_ANNIVERSARY,
    skip = 0,
    limit = 10,
  }: {
    fetchCelebration: FetchCelebration;
    type: CelebrationEnum;
    skip?: number;
    limit?: number;
    keywords?: string;
  }) {
    super({ limit, skip });
    this.type = CelebrationEnum.WORK_ANNIVERSARY;
    this.type = type;
    this.fetchCelebration = fetchCelebration;
  }

  async fetch(): Promise<CelebrationHit[]> {
    return this.fetchCelebration({ type: this.type, skip: this.skip, limit: this.limit });
  }
}
