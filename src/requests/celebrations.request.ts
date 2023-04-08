import { CelebrationEnum } from '../entities';
import { LinkedInRequest } from '../core/linkedin-request';
import { GetCelebrationsResponse } from '../responses';

export class CelebrationRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getCelebrations(type: CelebrationEnum, { skip = 0, limit = 10 } = {}): Promise<GetCelebrationsResponse> {
    const queryParams = {
      variables: `(start:${skip},typeName:${type},count:${limit})`,
      queryId: 'voyagerPropsDashPropsHomeCards.8fd31ef577032b88ffc0339dfec3c6b2',
    };
    return this.request.get(`graphql`, {
      params: queryParams,
    });
  }
}
