// ==UserScript==
// @name         Reveal Cards
// @namespace    https://blog.weircon.dk/
// @version      1
// @description  Reveals cards in planningpoker online
// @author       asger.weirsoe
// @match        https://planningpokeronline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=planningpokeronline.com
// @grant        none
// ==/UserScript==
var revealCards = () => {
    Array.from(document.getElementsByClassName('Card-module--downwards--5ef6b')).forEach((el) => {
        el.classList.remove('Card-module--downwards--5ef6b');
    })
}

var createRevealCardsButton = () => {
    var element = document.getElementsByClassName('HeaderPoker-module--middle--80875')[0]
    var button = document.getElementsByClassName('revealbutton')[0]
    if (button != null || element == null) {
        return;
    }
    let btn = document.createElement("button");
    btn.classList.add("revealbutton");
    btn.innerHTML = "Reveal Cards";
    btn.addEventListener("click", function() {
       revealCards();
    })
    element.insertAdjacentElement("afterend", btn);
}

(function() {
    'use strict';
    setInterval(createRevealCardsButton, 500);
})();
