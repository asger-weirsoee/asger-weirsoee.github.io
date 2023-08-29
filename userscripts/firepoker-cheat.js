// ==UserScript==
// @name         Firepoker Cheat
// @namespace    https://asger-weirsoee.github.io/
// @version      1.3
// @description  Adds what other people have voted as a title of the element! And other smaller stuff
// @author       asger.weirsoe
// @match        https://firepoker.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=firepoker.io
// @grant        none
// ==/UserScript==
let intervals = {};

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
var intervals_clear =(name) => {
    let interval = intervals[name];
    delete intervals[name];
    clearInterval(interval);
}

var mkAdmin = (key, fullname, scope) => {
	scope.game.owner.fullname = fullname;
	scope.game.owner.id = key;
	scope.$apply()
	console.log(fullname+" is now admin (only visible to you)");
}

var mkAdmInterval = () => {
    if (document.querySelector("body > div > div > div.col-md-4 > div > div:nth-child(2) > ul") == null) return
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
            intervals_clear("mkAdmInterval")
        }
    });
}

var addButtonToShowVoting = () => {
    if (document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm") == null) return

    document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm").childNodes.forEach((x) => {
        if (x.className != null)  {
            let btn = document.createElement("button");
            btn.innerHTML = document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div:nth-child(4)").style.display === 'none' ? 'Hide' : 'Show';
            btn.addEventListener("click", function() {
                let nodesToShowOrHide = []
                nodesToShowOrHide.push(document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div:nth-child(4)"));
                nodesToShowOrHide.push(document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm"));
                let anyHidden = false;
                for (let i = 0; i < nodesToShowOrHide.length; i++) {
                     anyHidden = nodesToShowOrHide[i].style.display === 'none';
                    if (anyHidden) break;
                }

                btn.innerHTML = anyHidden ? 'Hide' : 'Show';
                for (let i = 0; i < nodesToShowOrHide.length; i++) {
                    nodesToShowOrHide[i].style.display = anyHidden ? '' : 'none';
                }
            });
            x.parentNode.parentNode.appendChild(btn)
            intervals_clear("addShowOptionsButton")
        }
    });
}

var addCustomVotesButton = () => {
    if (document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm") == null) return
 document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm").childNodes.forEach((x) => {
        if (x.className != null)  {
            let btn = document.createElement("button");
            let inputField = document.createElement("INPUT");
            inputField.setAttribute("type", "text");
            inputField.setAttribute('id',"custom-card");
            btn.innerHTML = "submit"
            btn.addEventListener("click", function() {
                let nodesToShowOrHide = []
                if (document.querySelector("#custom-card").value != "") {
                   let node = document.querySelector("body > div > div > div.col-md-8 > div:nth-child(2) > div.well.well-sm > ul > li:nth-child(1) > a");
                   let scope = angular.element(node).scope()
                   scope.card = document.querySelector("#custom-card").value;
                   node.click()
                }
            });
            x.parentNode.appendChild(inputField)
            x.parentNode.appendChild(btn)
            intervals_clear("addCustomVotesButton")
        }
    });
}

(function() {
    'use strict';
    document.addEventListener("DOMNodeInserted", (e) => {
        cheat();
    });
    angular.element(document).ready(() => {
        intervals["mkAdmInterval"] = setInterval(mkAdmInterval, 200);
        intervals["addShowOptionsButton"] = setInterval(addButtonToShowVoting, 200);
        intervals["addCustomVotesButton"] = setInterval(addCustomVotesButton, 200);
    });

})();

