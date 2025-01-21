/* eslint-disable import/unambiguous */
declare const __brand: unique symbol
type Brand<T, B> = Readonly<Readonly<T> & Readonly<{ [__brand]: B }>>
type JsonSchemas = Readonly<{
  definitions: Readonly<Record<string, unknown>>
}>
