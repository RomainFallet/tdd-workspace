import type { HttpRequest } from "../model/http-request"
import type { HttpRouter } from "../model/http-router"

class HandleHttpRequestUseCase {
  public execute(httpRequest: HttpRequest, httpRouters: ReadonlyArray<HttpRouter>) {
    httpRouters.some(httpRouter => httpRouter.matches(httpRequest, httpRequest.url))
  }
}

export { HandleHttpRequestUseCase }
