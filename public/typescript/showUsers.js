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
        while (_) try {
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
function searchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:3000/htl/dating", {})
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        createList(data, document.getElementById("search-input").value);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createList(users, name) {
    var usersFound = false;
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";
    var ul = document.createElement("ul");
    if (users.length > 0 && name != "") {
        users.forEach(function (u) {
            var _a;
            if (u.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
                usersFound = true;
                console.log(u);
                var li = document.createElement("li");
                li.textContent = u.name;
                var p = document.createElement("p");
                p.textContent = u.age.toString();
                li.appendChild(p);
                p = document.createElement("p");
                p.textContent = u.gender;
                li.appendChild(p);
                p = document.createElement("p");
                p.textContent = u.email;
                li.appendChild(p);
                p = document.createElement("p");
                p.textContent = u.description;
                li.appendChild(p);
                if (u.hasOwnProperty('imgPath')) {
                    var pic = document.createElement("img");
                    pic.setAttribute("src", (_a = u.imgPath) === null || _a === void 0 ? void 0 : _a.toString());
                    li.appendChild(pic);
                }
                ul.appendChild(li);
            }
        });
        searchResults.appendChild(ul);
        var div1 = document.createElement("div");
        div1.className = "ProfileItem";
        div1.textContent = "Hallo";
        var div2 = document.createElement("div");
        div2.className = "ProfileImg";
        var div3 = document.createElement("div");
        div3.className = "imageContain";
        var img = document.createElement("img");
        img.src = "https://placehold.it/200x200";
        div3.appendChild(img);
        div2.appendChild(div3);
        var div4 = document.createElement("div");
        div4.className = "ProfileDes";
        var a = document.createElement("a");
        a.className = "profileTitle";
        a.textContent = "Username";
        var div5 = document.createElement("div");
        div5.className = "profileInfo";
        div4.append(a, div5);
        div1.appendChild(div2);
        searchResults.appendChild(div1);
    }
    if (!usersFound) {
        searchResults.innerHTML = "";
        var p = document.createElement("p");
        p.textContent = "Keine Benutzer gefunden.";
        searchResults.appendChild(p);
    }
}
