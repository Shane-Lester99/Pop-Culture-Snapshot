import React from 'react';
import ReactDom from 'react-dom';
import {Students, Campuses } from './components/index.js';
import './css/style.css';

const css = require('./css/style.css').toString();
console.log(css);

const Index = () => {
    return <div> Hello React!
            <Students />
            <Campuses />
        </div>
};

ReactDom.render(<Index />, document.getElementById('root'));
