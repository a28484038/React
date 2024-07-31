import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* <div>
    <form>
    <label type="name">Name</label>
    <input type="text" id="username" name="username"></input>
    <button for="submit">submit</button>
    </form>
  </div> */
  
   <React.StrictMode>
    <App />
    <h1>Dash board</h1>
        <table border = "1">
          <thead>
            <tr>
              <th>裝置名稱</th>
              <th>溫度 </th>
              <th>濕度 </th>
            </tr>
          </thead>
          <tbody>
            <th id="row0">sensor-001</th>
            <th id="row0">35</th>
            <th id="row0">80</th>
          </tbody>
        </table>
    <Footer />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
