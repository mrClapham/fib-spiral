import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/components/App/App.js';
import FibSpiral from '../js/vanilla_conmponents/fib-spiral';
require("../sass/entry.scss");

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
// Pure JS renderer.
    const _header = FibSpiral.create({ text: "Default headline text" })
    .render(document.querySelector('#content-vanilla'));
}

