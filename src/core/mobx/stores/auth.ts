import {observable} from 'mobx';


export interface UserData {
    email:string;
    password:string;
}

interface User {
    userData: UserData,
    login:(user:UserData) => void,
    logout:() => void,
}

export const auth = observable<User> ({
    userData:{
        email:"",
        password:"",
    },
    login(user) {
        this.userData = user;
    },
    logout() {
        this.userData = {
            email:"",
            password:"",
        };
    }
})