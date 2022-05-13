const UserView = require('./../../app/views/UserView')

describe ("Tests for UserView", () =>{
    
    test ('1. Return error object when try to create a new user with an null payload', () => { 
    //código que vamos a usar en la app
    const payload = null
    const result = UserView.createUser(payload)
    
    //codigo de validación de resultados
    expect(result.error).toMatch(/payload no existe/)
    });
})