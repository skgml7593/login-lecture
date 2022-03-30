"use strict";

class UserStroage{
    // data를 은닉화 후 메서드로 전달
    static #users = {
        id: ["1234", "12345", "123"],
        psword: ["1234", "12345","123"],
        name: ["333", "3333", "444"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUSers = fields.reduce((newUSers, fields)=>{
            if(users.hasOwnProperty(fields)){
                newUSers[fields] = users[fields];
            }
            return newUSers;
        }, {});
        return newUSers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

}

module.exports = UserStroage;