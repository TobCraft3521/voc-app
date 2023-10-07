import { Start } from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useState } from 'react';
import View from './View';
import Edit from './Edit';

function App() {
  //set = vocabulary data set
  const [set, setSet] = useState({ a: [], b: [] })
  const handleData = (data) => {
    setSet(data)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/open" element={<Start />} />
            <Route path='/view' element={<View set={set} />} />
            <Route path='/edit' element={<Edit onChange={handleData} set={set.a} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
