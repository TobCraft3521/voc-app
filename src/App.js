import { Start } from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useState } from 'react';
import View from './View';
import Edit from './Edit';

function App() {
  //set = vocabulary data set
  const [set, setSet] = useState({
    a: {
      aller: "gehen",
      venir: "kommen"
    }, b: {}, title: "New set", imgs: {aller:"test"}
  })
  const handleData = (data) => {
    setSet({ a: data, b: {}, imgs: {} })
  }

  const handleChange = (change) => {

  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/open" element={<Start />} />
            <Route path='/view' element={<View set={set} title={set.title} />} />
            <Route path='/edit' element={<Edit onChange={handleChange} set={set.a} imgs={set.imgs}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
