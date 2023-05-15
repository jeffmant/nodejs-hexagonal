import { main } from '../src'

describe('Index unit test', () => {
  it('Should main return correct text', () => {
    const text = 'Hello World'
    const sut = main(text)
    expect(sut).toBe('Hello World')
  })
})
