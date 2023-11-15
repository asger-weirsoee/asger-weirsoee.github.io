// ==UserScript==
// @name         Planningpoker cheat
// @namespace    https://asger-weirsoee.github.io/
// @version      0.1
// @description  Reveal what people has voted
// @author       asger.weirsoe
// @match        https://planningpokeronline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=planningpokeronline.com
// @grant        none
// ==/UserScript==

var cheat = () => {
    Array.from(document.getElementsByClassName('Card-module--downwards--5ef6b')).forEach((el) => {
        el.classList.remove('Card-module--downwards--5ef6b');
    })
}

var createCheatButton = () => {
    var element = document.getElementsByClassName('HeaderPoker-module--middle--80875')[0]
    var button = document.getElementsByClassName('cheatbutton')[0]
    if (button != null || element == null) {
        return;
    }
    let btn = document.createElement("button");
    btn.classList.add("cheatbutton");
    btn.innerHTML = "Cheat";
    btn.addEventListener("click", function() {
       cheat();
    })
    element.insertAdjacentElement("afterend", btn);
}

(function() {
    'use strict';
    setInterval(createCheatButton, 500);
})();
