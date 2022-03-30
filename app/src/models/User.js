"use strict";

const UserStroage = require("./UserStroage");
class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const {id, psword} = UserStroage.getUserInfo(this.body.id);
    
        if(id){
            if(id === this.body.id && psword === this.body.psword);{
                return { success : true};   
            }
            return {success : false, msg: "비밀번호가 틀렸습니다."};
        }
        return{success: false, msg: "존재하지 않는 아이디 입니다."};
    };

}

module.exports = User;