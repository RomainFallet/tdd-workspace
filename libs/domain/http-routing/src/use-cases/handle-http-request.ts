import type { HttpRequest } from '../model/http-request'
import type { HttpRouter } from '../model/http-router'

class HandleHttpRequestUseCase {
  public execute(
    httpRequest: HttpRequest,
    httpRouters: ReadonlyArray<HttpRouter>
  ): HttpRouter | undefined {
    return httpRouters.find((httpRouter) =>
      httpRouter.matches(httpRequest, httpRequest.url)
    )
  }
}

export { HandleHttpRequestUseCase }
