import { defineStore } from 'pinia'

export const UserStore = defineStore('auth', {
    state:() => {
        return { 
            username: '',
            email: '',
            password: '',
            
        }
    },
    getters:{

    },
    actions:{
        resetUser(){
            this.username = '',
            this.email = '',
            this.password = ''
        },
        addUser(email, password, username){
            this.username = username,
            this.email = email,
            this.password = password
        },
        signIn(formData){
            this.email = formData.email,
            this.password = formData.password
            //console.log(this.email)
        }
    }
})