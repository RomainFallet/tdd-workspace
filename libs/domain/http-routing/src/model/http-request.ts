type HttpRequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type HttpRequest = Readonly<{
  method: HttpRequestMethod,
  url: string,
  headers: Readonly<Record<string, string>>,
  body: Readonly<unknown>
}>



export type {
  HttpRequest,
  HttpRequestMethod
}
