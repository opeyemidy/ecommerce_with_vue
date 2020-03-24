import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { title: 'Fashion', link: 'fddff' },
      { title: 'Computing', link: 'dffwe' },
      { title: 'Phones & tablets', link: 'fffdfdf' },
      { title: 'Grocery', link: 'fffdfdf' },
      { title: 'Health & Beauty', link: 'dfdfdff' }
    ],
    products: [
      {
        id: 1,
        name: 'Elegant Designer Athletic Sneakers V2- Gold & Black',
        pics: '/shoe.jpg',
        price: 'sda',
        description: 'rrrewe',
        route: '/product'
      },
      {
        id: 2,
        name: 'God Over Everything Print T-Shirt - Navy Blue',
        pics: '/shirt.jpg',
        price: 'awwq',
        description: 'were',
        route: '/product'
      },
      {
        id: 3,
        name: 'HS121L (93-Litre) Single Door Fridge - Silver',
        pics: '/fridge.jpg',
        price: 'err',
        description: 'qwqw',
        route: '/product'
      },
      {
        name: 'LED Backlight Sport Waterproof Quartz Wrist Watches-Black',
        pics: '/watch.jpg',
        price: 'wee',
        description: 'ttr',
        route: '/product'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
