import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React , { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import './i18next';
import "../node_modules/bootstrap/dist/css/bootstrap.css"; 
import "../node_modules/font-awesome/css/font-awesome.min.css"; 
import "./assets/icon/custom-icons/css/custom-icons.css"; 
import "./assets/css/style.css";  
import "./assets/css/responsive.css";   
 
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Suspense fallback="loading"> <App /></Suspense>, document.getElementById("root"));


serviceWorker.unregister();
