/**
 * 【演習】
 * 以下のUsersクラスのテストを作成してください
 *
 */

import axios from 'axios'

class Users {
  static async all() {
    const res = await axios.get('/users.json')
    return res.data
  }

  static async register(id: number, name: string, age: number) {
    const res = await axios.post('/user', {
      id,
      name,
      age,
    })
    return res.data
  }

  static async update(id: number, name?: string, age?: number) {
    const res = await axios.patch(`/user/${id}`, { id, name, age })
    return res.data
  }

  static async delete(id: number) {
    const res = await axios.delete('/user', { data: { id } })
    return res.data
  }
}

export default Users
