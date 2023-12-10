it('はじめてのmock', () => {
  const mockFunc = jest.fn(() => 'Hello mock')
  expect(mockFunc()).toBe('Hello mock')
})

it('mockImplementation', () => {
  const mockFunc = jest.fn()
  mockFunc.mockImplementation(() => 'Hello mock2')
  expect(mockFunc()).toBe('Hello mock2')
})
