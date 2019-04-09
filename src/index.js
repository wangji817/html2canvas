import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Test from '../component/test/index.js';
import './index.scss';

ReactDOM.render(
    <div className="page">
        <Test />
    </div>,
    document.getElementById('page')
);