import until from '../../untils/common'
import { loginByPhone, loginOut } from '../../api/user'
const state = {
  token: until.getToken(), // 临时令牌
  userInfo: until.getUserInfo() // 用户信息
}
const mutations = {
  SET_TOKEN: (state, token) => {
    until.setToken(token)
    state.token = token
  },

  SET_USERINFO: (state, userInfo) => {
    until.setUserInfo(userInfo)
    state.userInfo = userInfo
  }
}

const actions = {
  // 用户登录
  phonelogin ({ commit }, params) {
    return new Promise((resolve, reject) => {
      loginByPhone(params).then((res) => {
        commit('SET_TOKEN', res.ticket)
        commit('SET_USERINFO', res)
        resolve(res)
      })
    })
  },

  // 用户登出
  loginOut ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      loginOut({ userId: state.userInfo.userId }).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_USERINFO', '')
        resolve(true)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
