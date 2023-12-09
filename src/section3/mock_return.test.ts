it('モック関数に戻り値を設定する', () => {
  const mockFn = jest.fn()
  mockFn.mockReturnValue('Mock return value')
  expect(mockFn()).toBe('Mock return value')
})

it('モック関数に一度だけ返される戻り値を設定する', () => {
  const mockFn = jest.fn()
  mockFn.mockReturnValueOnce('Mock return value')
  expect(mockFn()).toBe('Mock return value')
  expect(mockFn()).toBe(undefined)
})

it('モック関数に非同期な戻り値を設定する', async () => {
  const mockFn = jest.fn()
  mockFn.mockResolvedValue('Resolved value')
  const result = await mockFn()
  expect(result).toBe('Resolved value')
})
