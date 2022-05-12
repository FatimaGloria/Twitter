const User = require('./../../app/models/User')

describe ("Unit Tests for User class", () =>{
    test ('Create an User object', ()=>{
    //código que vamos a usar en la app
    const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")
    
    //codigo de validación de resultados
    expect(user.id).toBe(1)
    expect(user.userName).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
    });
})