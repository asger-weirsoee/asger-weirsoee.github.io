// ==UserScript==
// @name         Firepoker Cheat
// @namespace    https://asger-weirsoee.github.io/
// @version      1.2
// @description  Adds what other people have voted as a title of the element!
// @author       asger.weirsoe
// @match        https://firepoker.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=firepoker.io
// @grant        none
// ==/UserScript==
let interval;

var cheat = () => {
    document.querySelectorAll(".list-item").forEach((x) => {
        for (let y of x.children) {
            y.title = x.children[0].innerText;
        }
    });
}

var getPart =(fullname, scope) => {
    for (const [key, value] of Object.entries(scope.game.participants)) {
      if (value['fullname'] == fullname) {
          return key;
      }
    }
    return null;
}

var mkAdmin = (key, fullname, scope) => {
	scope.game.owner.fullname = fullname;
	scope.game.owner.id = key;
	scope.$apply()
	console.log(fullname+" is now admin (only visible to you)");
}

var addButton = () => {
    document.querySelector("body > div > div > div.col-md-4 > div > div:nth-child(2) > ul").childNodes.forEach((x) => {
        if (x.className != null) {
            let btn = document.createElement("button");
            btn.innerHTML = "MkAdmn";
            btn.addEventListener("click", function() {
                let scope = angular.element(x).scope();
                let fullname = x.firstChild.data.trim();
                let selectedPart = getPart(fullname, scope);
                mkAdmin(selectedPart, fullname, scope);
            });
            x.appendChild(btn);
            clearInterval(interval);
        }
    });
}

(function() {
    'use strict';
    document.addEventListener("DOMNodeInserted", (e) => {
        cheat();
    });
    angular.element(document).ready(() => {
        interval = setInterval(addButton, 200);
    });

})();


