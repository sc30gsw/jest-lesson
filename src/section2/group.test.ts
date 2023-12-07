describe('配列に関するテスト', () => {
  it('配列に要素を追加できる', () => {
    const arr = []
    arr.push('element')
    expect(arr).toEqual(['element'])
  })

  it('配列の長さが正しい', () => {
    const arr = [1, 2, 3]
    expect(arr.length).toBe(3)
  })

  describe('配列の検索に関するテスト', () => {
    it('配列の要素を検索できる', () => {
      const arr = ['element1', 'element2']
      expect(arr.indexOf('element1')).toBe(0)
    })
  })
})
