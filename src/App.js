import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Candy */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
    </div>
  );
}

export default App;
