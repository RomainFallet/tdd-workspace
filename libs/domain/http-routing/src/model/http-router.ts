import type { HttpRequest } from './http-request'

type HttpRouterInterface = {
  matches: (httpRequest: HttpRequest, url: string) => boolean
}

export class HttpRouter implements HttpRouterInterface {
  constructor(private readonly url: string) {}

  public matches(httpRequest: HttpRequest): boolean {
    return true
  }
}
