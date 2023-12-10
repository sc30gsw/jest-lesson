import axios from 'axios'

import Users from './practice2'

jest.mock('axios')
const mockAxios = jest.mocked(axios)

describe('Usersクラス', () => {
  beforeEach(() => {
    mockAxios.get.mockClear()
    mockAxios.post.mockClear()
    mockAxios.patch.mockClear()
    mockAxios.delete.mockClear()
  })

  it('register', async () => {
    const users = [
      { id: 1, name: 'testUser1', age: 20 },
      { id: 2, name: 'testUser2', age: 21 },
      { id: 3, name: 'testUser3', age: 22 },
    ]
    mockAxios.get.mockResolvedValue({
      data: users,
    })

    let allUser = await Users.all()
    expect(allUser.length).toBe(3)
    expect(allUser).toEqual(users)

    const registerUser = { id: 4, name: 'testUser4', age: 23 }
    mockAxios.post.mockResolvedValue({ data: registerUser })

    const result = await Users.register(4, 'testUser4', 23)
    expect(result).toEqual(registerUser)
    expect(axios.post).toHaveBeenCalledWith('/user', {
      id: 4,
      name: 'testUser4',
      age: 23,
    })
    users.push(registerUser)

    allUser = await Users.all()
    expect(allUser.length).toBe(4)
    expect(allUser).toEqual(users)
  })

  it('update', async () => {
    let users = [
      { id: 1, name: 'testUser1', age: 20 },
      { id: 2, name: 'testUser2', age: 21 },
      { id: 3, name: 'testUser3', age: 22 },
    ]
    mockAxios.get.mockResolvedValue({
      data: users,
    })

    let allUser = await Users.all()
    expect(allUser).toEqual(users)

    const updateUser = { ...users[1], id: 2, name: 'testUpdateUser2' }
    mockAxios.patch.mockResolvedValue({ data: updateUser })

    const result = await Users.update(2, 'testUpdateUser2')
    expect(result).toEqual(updateUser)
    expect(axios.patch).toHaveBeenCalledWith(`/user/${updateUser.id}`, {
      id: 2,
      name: 'testUpdateUser2',
    })

    users = users.map((user) =>
      user.id === 2 ? { ...user, name: updateUser.name } : user,
    )
    mockAxios.get.mockResolvedValue({ data: users })
    allUser = await Users.all()
    expect(allUser).toEqual(users)
  })

  it('delete', async () => {
    const users = [
      { id: 1, name: 'testUser1', age: 20 },
      { id: 2, name: 'testUser2', age: 21 },
      { id: 3, name: 'testUser3', age: 22 },
    ]
    mockAxios.get.mockResolvedValue({
      data: users,
    })

    let allUser = await Users.all()
    expect(allUser.length).toBe(3)
    expect(allUser).toEqual(users)

    const deleteUser = { id: 2, name: 'testUser2', age: 21 }
    mockAxios.delete.mockResolvedValue({ data: deleteUser })

    const result = await Users.delete(2)
    expect(result).toEqual(deleteUser)
    expect(axios.delete).toHaveBeenCalledWith('/user', { data: { id: 2 } })

    const filteredUsers = users.filter((user) => user.id !== deleteUser.id)
    mockAxios.get.mockResolvedValue({
      data: filteredUsers,
    })
    allUser = await Users.all()
    expect(allUser.length).toBe(filteredUsers.length)
    expect(allUser).toEqual(filteredUsers)
  })
})
