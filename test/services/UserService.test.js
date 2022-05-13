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

    /*
    Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto 
    de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
    */

    test ('2. Get all user data in a list', () => { 
    //código que vamos a usar en la app
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoInList = UserService.getInfo(user)

    //codigo de validación de resultados
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("Carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
    });

    /*
    Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, 
    que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 
    */

    test ('3. Update userName', () => { 
    //código que vamos a usar en la app
        const user = UserService.create(1, "carlogilmar", "Carlo")
        UserService.updateUserUserName(user, "carlog")
    
    //codigo de validación de resultados
        expect(user.userName).toBe("carlog") 
    });

    /*
    Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, 
    que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
    */

    test ('4. Given a list of users give me the list of usernames', () => { 
        //código que vamos a usar en la app
            const user1 = UserService.create(1, "carlogilmar1", "Carlo")
            const user2 = UserService.create(1, "whoopaMC", "Whoopa")
            const user3 = UserService.create(1, "whoopyMC", "Whoopy")
            const usernames = UserService.getAllUsernames([user1, user2, user3])

        //codigo de validación de resultados
            expect(usernames).toContain("carlogilmar1")
            expect(usernames).toContain("whoopaMC")
            expect(usernames).toContain("whoopyMC")
    });
})