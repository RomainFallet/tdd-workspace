interface HttpRouterInterface {
  matches: (httpRequest: HttpRequest) => boolean
}

export class HttpRouter implements HttpRouterInterface {
  public matches(httpRequest: HttpRequest): boolean {}
}
