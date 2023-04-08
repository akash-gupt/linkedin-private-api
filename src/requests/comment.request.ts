import { CommentCreateResponse } from '../entities';
import { LinkedInRequest } from '../core/linkedin-request';

export class CommentRequest {
  private request: LinkedInRequest;

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  createComment({ threadUrn, comment }: { threadUrn: string; comment: string }): Promise<CommentCreateResponse> {
    const queryParams = {
      decorationId: 'com.linkedin.voyager.dash.deco.social.NormComment-32',
    };
    const payload = {
      commentary: { text: comment, attributes: [], $type: 'com.linkedin.voyager.dash.common.text.TextViewModel' },
      threadUrn: threadUrn,
    };
    return this.request.post('voyagerSocialDashNormComments', payload, {
      params: queryParams,
    });
  }
}
