const UserView = require('./../../app/views/UserView')

describe ("Tests for UserView", () =>{
    
    test ('1. Return error object when try to create a new user with a null payload', () => { 
    //código que vamos a usar en la app
    const payload = null
    const result = UserView.createUser(payload)
    
    //codigo de validación de resultados
    expect(result.error).toMatch(/payload no existe/)
    });

    /*
    Requerimiento 2: Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. 
    Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    */
    
    test ('2. Return an error object when try to create a new user with a payload with invalid properties', () => { 
        const payload = {userName: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

})