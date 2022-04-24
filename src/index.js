import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import { StudentList } from "./StudentList/StudentList";
//import { StudentPosts } from "./StudentPosts/StudentPosts";
import { Provider } from "react-redux";
import {store} from './store';

// App is the root component of our app.
// React application is formed by a tree of React components. (github copilot)

//To use react router, we need to wrap our app in a BrowserRouter component
//We also need to install react-router-dom package
//We created Routes component to wrap our routes
//We created two routes, one for login form and one for student list

//To connect Redux to the App component, we need to wrap App component in Provider component with store as a prop
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/students" element={<StudentList />}/>
        <Route path="/posts" element={<StudentPosts />} />
      </Routes>
    </BrowserRouter> */}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();