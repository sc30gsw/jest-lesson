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
}

export default Users
