import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Create from './Create';
import Home from './Home';
import NotFound from './notfound'
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
