module.exports = class UserDto {
    id;
    login;
    fullname;
    email;
    isActivated;
    role;

    constructor(model) {
        this.id = model.user_id;
        this.login = model.user_login;
        this.fullname = model.user_fullname;
        this.email = model.user_email;
        this.isActivated = model.user_activated;
        this.role = model.user_role;
    }
}