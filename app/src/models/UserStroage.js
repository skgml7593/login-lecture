"use strict";

const fs = require('fs').promises;

class UserStroage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static getUsers(...fields){
        //const users = JSON.parse(data);
        //const users = this.#users;
        const newUSers = fields.reduce((newUSers, fields)=>{
            if(users.hasOwnProperty(fields)){
                newUSers[fields] = users[fields];
            }
            return newUSers;
        }, {});
        return newUSers;
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
            .then((data) =>{
                return this.#getUserInfo(data, id);

            })
            .catch(console.error);

        
    }

   

    static save(userInfo){
       // const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.username.push(userInfo.username);
        return {success: true};
    }

}

module.exports = UserStroage;