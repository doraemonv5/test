import axios from 'axios'
import vuex from 'vuex'
import Vue from 'vue'
import Cookie from 'vue-cookies'
Vue.use(vuex)
export default new vuex.Store({
    state:{
        allcourse:[],
        couresdesc:null,
        allarticle:[],
        articledetail:null,
        username:Cookie.get('user'),
        usertoken:Cookie.get('token'),

        apiList:{
        course:'http://127.0.0.1:8000/api/v1/detail/',
        coursedetail:"http://127.0.0.1:8000/api/v1/detail/'",
        login:'http://127.0.0.1:8000/api/login/',
        openclass:'http://127.0.0.1:8000/api/openclass/',
        }
    },
    mutations:{
        GETCOURSE(state,data){
            state.allcourse = data.data.data
            
        },
        GETCOURSEDESC(state,data){
            console.log('course'+data.data.data)
            state.couresdesc = data.data.data
        },
        GETLOGINSTATE(state,Token){
            state.loginstate = Token
        },
        SAVETOKEN(state,usertoken){
            state.username = usertoken.user;
            state.usertoken = usertoken.token;
            Cookie.set('token',usertoken.token,'20min');
            Cookie.set('user',usertoken.user,'20min');
            
        },
        CLEAERTOKEN(state) {
         state.username = null
        state.usertoken = null
        Cookie.remove('user')
        Cookie.remove('token')

        },
        GETARTICLE(state,data){
            state.allarticle =data.data.data
        },
        GETARTICLEDETAIL(state,data){
            console.log(data.data.data)
            state.articledetail = data.data.data
        }


    },
    actions:{
        getcourse(context){
            
            axios.request({
                url:'http://127.0.0.1:8000/api/v1/course/',
                method:'get'
            }).then(function(data){
                context.commit('GETCOURSE',data)


            })

        },
        getcoursedesc(context,id){
            
            axios.request({
                url:'http://127.0.0.1:8000/api/v1/course/'+id+'/',
                method:'get'
            }).then(function(data){
                context.commit('GETCOURSEDESC',data)
            })
        },
        getarticle(context){
            axios.request({
                url:'http://127.0.0.1:8000/api/V1/deeptech/',
                method:'get',

            }).then(function(data){
                context.commit('GETARTICLE',data)

            })
        },
        getarticledetail(context,id){
            axios.request({
                url:'http://127.0.0.1:8000/api/V1/deeptech/'+id+'/',
                method:'get',
            }).then(function(data){
                context.commit('GETARTICLEDETAIL',data)
            })
        }
        

    }
})