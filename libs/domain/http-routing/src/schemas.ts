const schemas = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  definitions: {
    RandomProvider: {
      type: 'object',
      additionalProperties: false,
      required: [],
      properties: {}
    }
  }
} as const
export { schemas }
