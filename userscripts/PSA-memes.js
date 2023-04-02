// ==UserScript==
// @name         PSA - memes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes some subtle memes for the PSA. Maybe it'll make it more fun registering time?
// @author       Asger Geel Weirsøe
// @match        *://psa-fs.ent.cgi.com/psc/fsprda/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cgi.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('document').ready(() => {

        console.log("##############################################");
        console.log("                  PSA-MEMES");
        console.log("                    Created by asger.weirsoe");
        console.log("##############################################");
        console.log("");
        console.log(" if you have any idears to make it funnier");
        console.log(" you are free to send them to asger.weirsoe@cgi.com");
        var checkDiv = setInterval(() => {
            $('[id$=ICOK]').prop('value', 'OK BOOMER');
        });
    });
})();
