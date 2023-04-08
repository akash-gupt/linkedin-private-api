import { Client } from '../core/client';
import { CommentCreateResponse } from '../entities/comment-create-response.entity';
export class CommentRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async createComment({ threadUrn, comment }: { threadUrn: string; comment: string }): Promise<CommentCreateResponse> {
    const response = await this.client.request.comments.createComment({ threadUrn, comment });
    return response;
  }
}
