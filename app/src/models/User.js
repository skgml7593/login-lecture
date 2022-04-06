"use strict";

const {response} = require('express');
const UserStroage = require("./UserStroage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        const {id, psword} = await UserStroage.getUserInfo(client.id); 
    
        if(id){
            if(id === client.id && psword === this.body.psword);{
                return { success : true};   
            }
            return {success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return{success: false, msg: "존재하지 않는 아이디 입니다."};
    };

    async register(){
        const client = this.body;
        try {
            const response =  await UserStroage.save(client); 
            return response;          
        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = User;