import Vue from 'vue'

import {
  MessageBox,
  Link,
  Loading,
  Pagination,
  Popconfirm,
  Message
} from 'element-ui'
import '~/assets/scss/_theme.scss'

Vue.use(Link)
Vue.use(Popconfirm)
Vue.use(Pagination)
Vue.use(Loading)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$loading = Loading.service
