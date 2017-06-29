import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/components/App/App.js';
import FibSpiral from '../js/vanilla_conmponents/fib-spiral';
import mockData from '../js/vanilla_conmponents/mocks/PieData2LayerMock'
import PieChart2layer from '../js/vanilla_conmponents/pieChart2layer'
require("../sass/entry.scss");

document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {

            const _data = new  mockData();
            const _d1 =    _data.getRandom()
            console.log( "THE MOCK DATA = ", _d1 )

            const _pie = PieChart2layer.create('#piechart', _d1, {})


// Pure JS renderer.
    const _header = FibSpiral.create({ text: "Default headline text" })
    .render(document.querySelector('#content-vanilla'));
}

