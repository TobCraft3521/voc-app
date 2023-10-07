import { Start } from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useState } from 'react';
import View from './View';
import Edit from './Edit';
import ViewPresets from './ViewPresets';

function App() {
  //set = vocabulary data set
  const [set, setSet] = useState({
    a: {
      aller: "gehen",
      venir: "kommen"
    },
    b: {},
    title: "New set",
    imgs: { aller: "test" },
    description: "Empty vocabulary dataset"
  })

  const handleData = (data, imgs, title, description) => {
    setSet({ a: data, b: {}, imgs, title,description })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/open" element={<Start />} />
            <Route path='/view' element={<View set={set} setSet={setSet}/>} />
            <Route path='/edit' element={<Edit onChange={handleData} set={set.a} imgs={set.imgs} title={set.title} description={set.description} />} />
            <Route path='/viewpresets' element={<ViewPresets/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
