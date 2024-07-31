import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Temperature from './Temperature';
import SensorList from './SensorList';
import TodoItem from './TodoItem';

function Product(props) {
  return <div>
    <p>產品名稱：{props.name}</p>
    <p>產品價格：{props.price}</p>
    <button onClick={props.onBuy}>購買</button>
  </div>
};
const click = () => {
  let date = Date();
  console.log(date)
  alert("今天的日期是: " + date)
}
const data = [
  { "temperature": "25°C" },
  { "temperature": "22°C" },
  { "temperature": "36°C" },
  { "temperature": "34°C" }
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoItem />
    <p>************************************************************</p>
    <SensorList />
    <p>************************************************************</p>
    <Temperature data={data} />
    <p>************************************************************</p>
    <div><h1>Product</h1></div>
    <Product name='蘋果' price='5' onBuy={() => console.log("產品已購買")}></Product>
    <p>************************************************************</p>
    <div>
      <button value={true} onClick={click}>按下以顯示今天日期 </button>
    </div>
    <p>************************************************************</p>
    <div>
      <form>
        <label type="name">Name</label>
        <input type="text" id="username" name="username"></input>
        <button for="submit">submit</button>
      </form>
    </div>
    <p>************************************************************</p>
    <h1>Dash board</h1>
    <table border="1">
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
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


