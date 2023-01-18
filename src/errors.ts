import { DAVResponse } from './types/DAVTypes';

export class HomeUrlNotFound extends Error {
  public response: DAVResponse[];

  constructor(responses: DAVResponse[]) {
    super('Cannot find homeUrl - possible server throttling.');
    this.response = responses;
  }
}
