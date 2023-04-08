import { CelebrationRequest } from 'src/requests/celebrations.request';
import { AuthRequest } from '../requests/auth.request';
import { ConversationRequest } from '../requests/conversation.request';
import { InvitationRequest } from '../requests/invitation.request';
import { MessageRequest } from '../requests/message.request';
import { ProfileRequest } from '../requests/profile.request';
import { SearchRequest } from '../requests/search.request';
import { Request } from './request';
import { CommentRequest } from '../requests/comment.request';
import { NotificationRequest } from '../requests/notification.request';

export class LinkedInRequest extends Request {
  conversation = new ConversationRequest({ request: this });

  invitation = new InvitationRequest({ request: this });

  message = new MessageRequest({ request: this });

  profile = new ProfileRequest({ request: this });

  search = new SearchRequest({ request: this });

  auth = new AuthRequest({ request: this });

  celebrations = new CelebrationRequest({ request: this });

  comments = new CommentRequest({ request: this });

  notification = new NotificationRequest({ request: this });
}
