import type { RandomProvider } from '@romainfallet/http-routing'

class FakeRandomProvider implements RandomProvider {
  doStuff() {
    return Promise.resolve()
  }
}

export { FakeRandomProvider }
