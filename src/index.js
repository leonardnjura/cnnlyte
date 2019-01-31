// import React from "react";
// import { render } from "react-dom";
// import { Provider } from "react-redux";
// import App from "./components/App";
// import store from './store'
// import './assets/fonts/font-awesome.min.css';
// import './assets/fonts/materialdesignicons.min.css';
// import './assets/styles/main.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';


// render(
//   <Provider store={store}>

//     <App />
//   </Provider>,
//   document.getElementById("root")
// );


//CRA
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/fonts/font-awesome.min.css';
import './assets/fonts/materialdesignicons.min.css';
import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));

