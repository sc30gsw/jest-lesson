import axios from 'axios'

import Users from './practice'

jest.mock('axios')
const mockAxios = jest.mocked(axios)

describe('Usersクラス', () => {
  beforeEach(() => mockAxios.get.mockClear())

  it('Usersの一覧が取得できること', async () => {
    const users = [
      { id: 1, name: 'testUser1', age: 20 },
      { id: 2, name: 'testUser2', age: 21 },
      { id: 3, name: 'testUser3', age: 22 },
    ]
    mockAxios.get.mockResolvedValue({
      data: users,
    })
    const results = await Users.all()
    expect(results).toEqual(users)
    expect(axios.get).toHaveBeenCalledWith('/users.json')
  })
})
