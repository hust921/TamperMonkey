// ==UserScript==
// @name         Thingiverse Download All
// @namespace    https://www.thingiverse.com
// @version      0.1
// @description  Modify "Download All Files" button on thingiverse
// @author       hust921
// @match        https://www.thingiverse.com/thing*
// @icon         https://www.google.com/s2/favicons?domain=thingiverse.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function assignDownloadButton() {
        await delay(3000); // Wait 3 seconds
        document.getElementsByClassName("SidebarMenu__download--3Vqb7")[0].onclick = function() {
            const re = /thingiverse.com\/thing:(\d+)/g;
            const id = re.exec(window.location.href)[1];
            const newurl = "https://www.thingiverse.com/thing:" + id + "/zip";
            window.location.href = newurl;
        }
    }

    assignDownloadButton();
})();
