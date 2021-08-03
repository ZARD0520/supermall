import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        //mutations的作用：修改state中状态
        //其中的每个方法尽可能完成的事件比较单一
        addCounter(state,payload){
            payload.count++
        },
        addToCart(state,payload){
            payload.checked = true
            state.cartList.push(payload)
        }
    },
    actions:{
        addCart(context,payload){
            return new Promise((resolve,reject)=>{
                ///payload新添加的商品
                let oldProduct = context.state.cartList.find(item=>{
                    item.iid === payload.iid
                })

                //判断oldProduct
                if(oldProduct){
                    //oldProduct.count += 1
                    context.commit('addCounter',oldProduct)
                    resolve('已添加购物车~')
                }else{
                    payload.count = 1
                    //context.state.cartList.push(payload)
                    context.commit('addToCart',payload)
                    resolve('已添加购物车~')
                }
            })
        }
    },
    getters:{
        cartLength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    }
})

//挂载到Vue实例
export default store