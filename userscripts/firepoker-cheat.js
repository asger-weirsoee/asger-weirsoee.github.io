// ==UserScript==
// @name         Firepoker Cheat
// @namespace    https://asger-weirsoee.github.io/
// @version      1.1
// @description  Adds what other people have voted as a title of the element!
// @author       asger.weirsoe
// @match        https://firepoker.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=firepoker.io
// @grant        none
// ==/UserScript==

var cheat = () => {
    document.querySelectorAll(".list-item").forEach((x) => {
        for (let y of x.children) {
            y.title = x.children[0].innerText;
        }
    });
}
(function() {
    'use strict';
    document.addEventListener("DOMNodeInserted", (e) => {
        cheat();
    });
})();


