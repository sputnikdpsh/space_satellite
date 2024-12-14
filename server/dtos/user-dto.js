module.exports = class UserDto {
    id;
    login;
    email;
    isActivated;

    constructor(model) {
        this.id = model.user_id;
        this.login = model.user_login;
        this.email = model.user_email;
        this.isActivated = model.user_activated;
    }
}