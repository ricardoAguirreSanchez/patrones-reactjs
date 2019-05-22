import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Formulario from './componentes/Formulario.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
