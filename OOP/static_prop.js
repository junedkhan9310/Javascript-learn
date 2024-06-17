class user {
    constructor(username){
        this.username= username
    }

    loging(){
        console.log(`username is ${this.username}`);
    }

    createID(){
        return `123`
    }
}

const juned = new user('kjw')

console.log(juned.createID())