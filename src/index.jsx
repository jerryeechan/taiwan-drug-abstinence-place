import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

import 'semantic-ui-css/semantic.min.css';

window.onload = function() {
    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );
};
