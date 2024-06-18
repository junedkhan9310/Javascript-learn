class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password= value
    }

}
const juned = new user('juned@gmail.com','abcde')
console.log(juned.password);