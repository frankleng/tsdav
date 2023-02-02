// eslint-disable-next-line max-classes-per-file
import { DAVResponse } from './types/DAVTypes';

export class DavResponseError extends Error {
  public responses: DAVResponse[];

  public response?: DAVResponse;

  constructor(responses: DAVResponse[], msg?: string) {
    const [response] = responses.filter((r) => r.status > 299);
    super([msg, response?.statusText].filter(Boolean).join(' - ') || 'Unknown error');
    this.responses = responses;
    this.response = response;
  }
}

export class HomeUrlNotFound extends DavResponseError {
  constructor(responses: DAVResponse[]) {
    super(responses, 'Could not find homeUrl - possible server throttling.');
  }
}
