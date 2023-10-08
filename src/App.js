import { Start } from './Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useEffect, useState } from 'react';
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

  const handleData = (data) => {
    setSet({ a: data.a, b: {}, imgs: data.imgs, title: data.title, description: data.description })
  }

  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location = "/"
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Start handleData={handleData} />} />
            <Route path="/open" element={<Start handleData={handleData} />} />
            <Route path='/view' element={<View set={set} setSet={setSet} />} />
            <Route path='/edit' element={<Edit onChange={handleData} set={set.a} imgs={set.imgs} title={set.title} description={set.description} />} />
            <Route path='/viewpresets' element={<ViewPresets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
