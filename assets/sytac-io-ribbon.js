;(function () {
    'use strict';

    var el = document.querySelector('body > .page-content'),
        ribbon = document.querySelector('.sytac-io-ribbon-wrapper'),
        elTop = Math.floor(el.getBoundingClientRect().top) + document.body.scrollTop;

    document.addEventListener('scroll', function (e) {
        if (document.body.scrollTop > elTop) {
            !ribbon.className.match(/\sinverse/) && (ribbon.className += ' inverse');
        } else {
            ribbon.className = ribbon.className.replace(/\sinverse/, '');
        }
    });
}());