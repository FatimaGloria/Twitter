const User = require('./../../app/models/User')

describe ("Unit Tests for User class", () =>{
    
    test ('Create an User object', () => { 
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
    
    /*
    Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
    Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
    */  
   
    test ('Add getters', () => {
        //código que vamos a usar en la app
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        
        //codigo de validación de resultados
        expect(user.getUserName).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    /*
    Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
    Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
    */  
   
    test ('Add setters', () => {
        //código que vamos a usar en la app
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        
        //codigo de validación de resultados
        user.setUserName = "Gilmar"
        expect(user.userName).toBe("Gilmar")
        
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    });
})