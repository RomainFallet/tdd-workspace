import type { HttpRequest } from './http-request'

type HttpRouterInterface = {
  matches: (httpRequest: HttpRequest, url: string) => boolean
}

export class HttpRouter implements HttpRouterInterface {
  public matches(httpRequest: HttpRequest, url: HttpRequest['url']): boolean {
    return true;
  }
}
