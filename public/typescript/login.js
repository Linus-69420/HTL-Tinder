"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var currentUser;
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        var nameInput, pwInput, userDiv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nameInput = document.getElementById('name');
                    pwInput = document.getElementById('password');
                    if (!(nameInput.value !== "" && pwInput.value !== "")) return [3 /*break*/, 2];
                    console.log(nameInput.value, pwInput.value);
                    return [4 /*yield*/, fetch("http://localhost:3000/htl/dating/".concat(nameInput.value, "/").concat(pwInput.value), {})
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            console.log(data);
                            displayUser(data);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    userDiv = document.getElementById("user");
                    userDiv.innerHTML = "Benutzername oder Passwort falsch";
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function displayUser(u) {
    currentUser = u;
    var login = document.getElementById("login");
    login.classList.toggle("noDisplay");
    var container = document.getElementById("user");
    container.innerHTML = "";
    var div1 = document.createElement("div");
    div1.className = "ProfileItem";
    var div2 = document.createElement("div");
    div2.className = "ProfileImg";
    var div3 = document.createElement("div");
    div3.className = "imageContain";
    var img = document.createElement("img");
    img.setAttribute("src", u.imgPath);
    var div4 = document.createElement("div");
    div4.className = "ProfileDes";
    var a = document.createElement("a");
    a.className = "profileTitle";
    a.textContent = u.name;
    var div5 = document.createElement("div");
    div5.className = "profileInfo";
    div5.textContent = "Alter: " + u.age;
    var div6 = document.createElement("div");
    div6.className = "profileInfo";
    div6.textContent = "E-Mail: " + u.email;
    var div7 = document.createElement("div");
    div7.className = "profileInfo";
    div7.textContent = u.gender;
    var div8 = document.createElement("div");
    div8.className = "profileInfo";
    div8.textContent = "Beschreibung: " + u.description;
    var br = document.createElement("br");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("onclick", "deleteUser()");
    deleteBtn.innerHTML = "Delete";
    div3.appendChild(img);
    div2.appendChild(div3);
    div4.append(a, div5, div6, div7, div8);
    div1.append(div2, div4);
    container.append(br, div1, br);
    container.appendChild(deleteBtn);
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetch('http://localhost:3000/htl/dating/' + currentUser.id, {
                method: 'DELETE'
            })
                .then(function (res) { res.json(); });
            setTimeout(function () { return refreshPage(); }, 1000);
            return [2 /*return*/];
        });
    });
}
function refreshPage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            window.location.reload();
            return [2 /*return*/];
        });
    });
}
