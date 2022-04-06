"use strict";

const fs = require("fs").promises;

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
    };

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUSers = fields.reduce((newUSers, fields)=>{
            if(users.hasOwnProperty(fields)){
                newUSers[fields] = users[fields];
            }
            return newUSers;
        }, {});
        return newUSers;
    }

    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/users.json")
            .then((data) =>{
                return this.#getUsers(data, isAll, fields);

            })
            .catch(console.error);
    }

    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
            .then((data) =>{
                return this.#getUserInfo(data, id);

            })
            .catch((err) => console.error(err));

        
    }


    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.username.push(userInfo.username);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success:true};
    }

}

module.exports = UserStroage;