import { AxiosResponse } from 'axios';
import { stringify as queryStringify } from 'querystring';
import { load } from 'cheerio';

import { authHeaders, authUrl } from '../../config';
import { LinkedInRequest } from '../core/linkedin-request';

export class AuthRequest {
  private request: LinkedInRequest;

  metadata: {
    clientApplicationInstance?: { version: string; trackingId: string; applicationUrn: string };
    clientPageInstanceId?: string;
  } = {};

  constructor({ request }: { request: LinkedInRequest }) {
    this.request = request;
  }

  getAnonymousAuth(): Promise<AxiosResponse> {
    return this.request.get(authUrl, { fullResponse: true });
  }

  async authenticateUser({
    username,
    password,
    sessionId,
  }: {
    username: string;
    password: string;
    sessionId: string;
  }): Promise<AxiosResponse> {
    const payload = {
      session_key: username,
      session_password: password,
      JSESSIONID: sessionId,
    };

    const response = await this.request.post(authUrl, queryStringify(payload), {
      headers: authHeaders,
      fullResponse: true,
    });

    this.getMetadata();

    return response;
  }

  async getMetadata() {
    if (this?.metadata?.clientApplicationInstance || this?.metadata?.clientPageInstanceId) {
      return this.metadata;
    }

    const res = await this.request.get<string>('/');

    const $ = load(res);

    const clientApplicationInstanceRaw = $('meta[name="applicationInstance"]');
    const clientApplicationInstanceContent = clientApplicationInstanceRaw.attr('content');
    if (clientApplicationInstanceRaw && clientApplicationInstanceContent) {
      const clientApplicationInstance = JSON.parse(clientApplicationInstanceContent);
      this.metadata.clientApplicationInstance = clientApplicationInstance;
    }

    const clientPageInstanceIdRaw = $('meta[name="clientPageInstanceId"]');
    const clientPageInstanceIdContent = clientPageInstanceIdRaw.attr('content');
    if (clientPageInstanceIdRaw) {
      const clientPageInstanceId = clientPageInstanceIdContent;
      this.metadata.clientPageInstanceId = clientPageInstanceId;
    }

    return this.metadata;
  }
}
