const User = require('./../../app/models/User')

class UserService {
    static create(id, userName, name,) {
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateBio(user, bio){
        user.setBio = bio
    }

    static updateUserUserName(user, userName){
        user.setUserName = userName
    }

    static getAllUsernames(users){
        const usersUsernames = users.map( user => user.userName)
        return usersUsernames
    }
}

module.exports = UserService