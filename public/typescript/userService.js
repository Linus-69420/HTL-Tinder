"use strict";
exports.__esModule = true;
exports.UserSevice = void 0;
var UserSevice = /** @class */ (function () {
    function UserSevice() {
        this.users = [{
                id: 1,
                name: "Linus",
                age: 17,
                gender: "male",
                email: "Linus@htl.at"
            },
            {
                id: 2,
                name: "Bajtik",
                age: 17,
                gender: "female",
                email: "Bajtik@htl.at"
            },
            {
                id: 3,
                name: "Oliver",
                age: 17,
                gender: "male",
                email: "Oliver@htl.at"
            }
        ];
        this.userCount = 2;
    }
    UserSevice.prototype.searchUsers = function (searchTerm) {
        var lowerCaseSearchTerm = searchTerm.toLowerCase();
        return this.users.filter(function (user) {
            return user.name.toLowerCase().includes(lowerCaseSearchTerm);
        });
    };
    UserSevice.prototype.getAllUsers = function () {
        return this.users;
    };
    UserSevice.prototype.getUserById = function (id) {
        return this.users.find(function (u) { return u.id == id; });
    };
    UserSevice.prototype.addUser = function (user) {
        this.userCount++;
        user.id = this.userCount;
        this.users.push(user);
    };
    UserSevice.prototype.deleteUser = function (id) {
        var _this = this;
        var user = this.users.find(function (u) { return u.id == id; });
        if (user !== undefined) {
            this.users.forEach(function (item, index) {
                if (item === user)
                    _this.users.splice(index, 1);
            });
            return true;
        }
        return false;
    };
    UserSevice.prototype.updateUser = function (user) {
        if (user === undefined) {
            return;
        }
        var userToUpdate = this.getUserById(user.id);
        if (userToUpdate !== undefined) {
            userToUpdate.name = user.name;
            userToUpdate.email = user.name;
            userToUpdate.gender = user.name;
        }
    };
    return UserSevice;
}());
exports.UserSevice = UserSevice;
