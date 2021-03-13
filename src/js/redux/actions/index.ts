import { getCount } from '@api/index'

const actions = store => ({
  async getInitData () {
    try {
      const testData = await getCount()
      return { testData }
    } catch (e) {
      return 0
    }
  },
  increment: state => ({ testData: state.testData + 1 }),
  decrement: state => ({ testData: state.testData - 1 })
})

export default actions
