import Vue from 'vue'

import { io } from 'socket.io-client'
import App from './App.vue'
import store from '../store'
import { MutationPayload } from 'vuex'

Vue.config.productionTip = false

const container = document.createElement('div')
const app = new Vue({
  components: { App },
  store,
  template: '<App/>',
})

document.body.appendChild(container)

app.$mount(container)

const socket = io()

socket.on('commit', ({ type, payload }: MutationPayload) =>
  store.commit(type, payload)
)

store.subscribe(mutation => {
  socket.emit('commit', mutation)
})
