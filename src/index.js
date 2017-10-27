import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
} from 'react-router-dom'

ReactDOM.render(<Router>
                <App />
                </Router>, 
                document.getElementById('root')
            );
                registerServiceWorker();
