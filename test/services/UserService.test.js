const UserService = require('./../../app/services/UserService')

describe ("Tests for UserService", () =>{
    
    test ('1. Create a new user using the UserService', () => { 
    //código que vamos a usar en la app
    const user = UserService.create(1, "carlogilmar", "Carlo")
    
    //codigo de validación de resultados
    expect(user.userName).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    });

})