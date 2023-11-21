// ==UserScript==
// @name         Scrumpoker Online cheat
// @namespace    https://blog.weircon.dk/
// @version      0.1
// @description  Makes the voted values be displayed as title in the td element
// @author       asger.weirsoe
// @match        https://www.scrumpoker-online.org/en/room/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scrumpoker-online.org
// @grant        none
// ==/UserScript==

let cheat = () => {
    let nodeList = document.querySelectorAll(".flip-card")
    nodeList.forEach((x) => {
        x.parentNode.title = x.innerText;
    });
}

(function() {
    'use strict';
    document.addEventListener("DOMNodeInserted", (e) => {
        cheat();
    });
    // Your code here...
})();
