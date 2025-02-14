import type { HttpRequest } from 'libs/domain/http-routing/src/model/http-request'
import { describe, expect, it } from '@developpeurdurable/test'

import {
  HandleHttpRequestUseCase,
  HttpRouter
} from '@romainfallet/http-routing'

describe('handleHttpRequest', () => {
  it('CAS PASSANT - should return an HTTP Router matching the request', () => {
    // Given
    const httpRequest: HttpRequest = {
      url: '/api/v1/groups',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {}
    }
    const httpRouters = [
      new HttpRouter('/api/v1/users'),
      new HttpRouter('/api/v1/groups')
    ]
    const handleHttpRequestUseCase = new HandleHttpRequestUseCase()

    // When
    const result = handleHttpRequestUseCase.execute(httpRequest, httpRouters)

    // Then
    expect(result).toStrictEqual(httpRouters[1])
  })
})
