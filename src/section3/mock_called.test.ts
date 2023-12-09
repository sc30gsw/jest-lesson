it('モック関数が呼び出される', () => {
  const mockFn = jest.fn()
  mockFn()
  expect(mockFn).toHaveBeenCalled()
})

it('モック関数が2回呼び出される', () => {
  const mockFn = jest.fn()
  mockFn()
  mockFn()
  expect(mockFn).toHaveBeenCalledTimes(2)
})

it('モック関数に引数hogeが渡される', () => {
  const mockFn = jest.fn()
  mockFn('hoge')
  expect(mockFn).toHaveBeenCalledWith('hoge')
})
