const User = require('./../../app/models/User')

describe ("Unit Tests for User class", () =>{
    test ('Create an User object', ()=>{
    //código que vamos a usar en la app
    const user = new User(1, "carlogilmar", "Carlo", "Bio")
    
    //codigo de validación de resultados
    expect(user.id).toBe(1)
    expect(user.userName).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    
    //Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined() // .not.toBeUndefined verifica que tenga un valor
    });
})