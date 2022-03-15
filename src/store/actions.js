export default {
  setUserName(context,username) {
    context.commit('setUserName',username)
  },
  setCartNum(context,cartNum) {
    context.commit('setCartNum',cartNum)
  }
}