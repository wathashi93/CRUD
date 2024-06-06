import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student  from './Student';
import Create from './Create';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Student />}></Route>
       <Route path="/create" element={<Create />}></Route>
       <Route path="/delete/:id" element={<delete />}></Route>
       <Route path="/edit" element={<edit />}></Route>

       
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
