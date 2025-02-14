import type { HttpRequest } from 'libs/domain/http-routing/src/model/http-request'
import { describe, expect, it } from '@developpeurdurable/test'

import {
  HandleHttpRequestUseCase,
  HttpRouter
} from '@romainfallet/http-routing'

describe('handleHttpRequest', () => {
  it('CAS PASSANT - doit retourner une 200 si un routeur HTTP correspond à la requête', () => {
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
    const response = {
      status: 'success',
      code: 200
    };
    expect(result).toStrictEqual(response)
  })

  it('CAS NON PASSANT - doit retourner une 404 si aucun routeur HTTP ne correspond à la requête', () => {
    // Given
    const httpRequest: HttpRequest = {
      url: '/api/v1/invalidPath',
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
    const response = {
      status: 'error',
      code: 404
    }
    expect(result).toStrictEqual(response)
  });
})
