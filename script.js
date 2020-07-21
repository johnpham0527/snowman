'use strict';

const dragndrop = function () {
    let myX = '';
    let myY = '';
    let whichArt = '';

    function movestart(e) {
        whichArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined?  e.layerY : e.offsetY;
        whichArt.style.zIndex = 10;
    }

    function moveDrop(e) {
        e.preventDefault();
        
    }

    document.querySelector('body').addEventListener('dragstart', movestart, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
}();