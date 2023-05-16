import { AxiosProxyConfig } from 'axios';

import {
  CelebrationsRepository,
  CommentRepository,
  ConversationRepository,
  FeedRepository,
  InvitationRepository,
  MessageRepository,
  NotificationRepository,
  ProfileRepository,
  SearchRepository,
} from '../repositories';
import { LinkedInRequest } from './linkedin-request';
import { Login } from './login';

interface ClientOpts {
  proxy?: AxiosProxyConfig;
}

export class Client {
  request: LinkedInRequest;

  constructor({ proxy }: ClientOpts = {}) {
    this.request = new LinkedInRequest({ proxy });
  }

  login = new Login({ client: this });

  search = new SearchRepository({ client: this });

  invitation = new InvitationRepository({ client: this });

  profile = new ProfileRepository({ client: this });

  conversation = new ConversationRepository({ client: this });

  message = new MessageRepository({ client: this });

  celebration = new CelebrationsRepository({ client: this });

  comment = new CommentRepository({ client: this });

  notification = new NotificationRepository({ client: this });

  feed = new FeedRepository({ client: this });
}
