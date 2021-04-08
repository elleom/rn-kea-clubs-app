class User {
    constructor(id, name, password, email, title, msgNotification) {
        this.uid = id; //string => json object
        this.name = name;
        this.password = password;
        this.email = email;
        this.title = title;
        this.msgNotification = msgNotification; //boolean
    } 

}

export default User;