import { CreditSummary } from '../entities';

export interface RemoveSalesNavSeatResponse {
  removed: number[];
  creditSummary: CreditSummary;
}
