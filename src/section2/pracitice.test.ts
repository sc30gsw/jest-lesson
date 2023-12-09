import { ShoppingList } from './practice'
describe('ShoppingListのテスト', () => {
  let shoppingList: ShoppingList

  beforeAll(() => {
    shoppingList = new ShoppingList()
  })

  describe('addItem', () => {
    it('addItemメソッドが、アイテムをリストに追加できること', () => {
      shoppingList.addItem('item1')
      expect(shoppingList.list).toEqual(['item1'])
      expect(shoppingList.list.length).toBe(1)
    })
  })

  describe('removeItem', () => {
    it('removeItemメソッドがアイテムをリストから削除できること', () => {
      shoppingList.list = ['item1', 'item2', 'item3']
      shoppingList.removeItem('item2')
      expect(shoppingList.list).not.toContain('item2')
      expect(shoppingList.list.length).toBe(2)
    })

    it('removeItemメソッドが存在しないアイテムの削除を試みた時にエラーをスローすること', () => {
      expect(() => shoppingList.removeItem('item1')).toThrow(
        'アイテム: item1 は存在しません',
      )
    })
  })
})
