export type HttpCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500

type HttpStatus = "error" | "success"

export type HttpResponse = Readonly<{ status: HttpStatus, code: HttpCode}>
