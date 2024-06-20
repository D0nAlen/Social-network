import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store.js";
import { BrowserRouter } from 'react-router-dom';
// import Provider from "./StoreContext.js";
import StoreContext from "./StoreContext.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <StoreContext.Provider value={store}>
                    {/* <Provider store={store}> */}
                    <App />
                </StoreContext.Provider>
                {/* </Provider> */}
            </React.StrictMode>
        </BrowserRouter>
    );
};

// rerenderEntireTree(store.getState());
rerenderEntireTree();

store.subscribe(() => {
    // let state = store.getState();
    rerenderEntireTree();
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default rerenderEntireTree;
