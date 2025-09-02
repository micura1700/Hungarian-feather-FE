import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Bootstrap táblázat Reactben</h1>
      <div style={{ width: "150%" }}>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Cím</th>
            <th>nemtudom</th>
            <th>Telefonszám</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A1</td>
            <td>B1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>A2</td>
            <td>B2</td>
            <td>C2</td>
          </tr>
          <tr>
            <td>A3</td>
            <td>B3</td>
            <td>C3</td>
          </tr>
          <tr>
            <td>A4</td>
            <td>B4</td>
            <td>C4</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
