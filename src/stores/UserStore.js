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
        addUser(formData){
            this.username = formData.username,
            this.email = formData.email,
            this.password = formData.password
        },
        signIn(formData){
            this.email = formData.email,
            this.password = formData.password
        }
    }
})