import { CreditSummary, Errors } from '../entities';

export interface AddSalesNavSeatResponse {
  creditSummary: CreditSummary;
  errors: Errors;
}
