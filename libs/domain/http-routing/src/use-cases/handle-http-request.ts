import type { HttpRequest } from '../model/http-request'
import type { HttpRouter } from '../model/http-router'
import type {  HttpResponse } from "../model/http-response";

class HandleHttpRequestUseCase {
  public execute(
    httpRequest: HttpRequest,
    httpRouters: ReadonlyArray<HttpRouter>
  ): HttpResponse {
    const result = httpRouters.find((httpRouter) =>
      httpRouter.matches(httpRequest)
    )
    if (result !== undefined) {
      return {
        status: "success",
        code: 200
      }
    } else {
      return {
        status: "error",
        code: 404
      }
    }
  }
}

export { HandleHttpRequestUseCase }
