import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import AllCourses from './AllCourses';
import OneCourse from './OneCourse';
import DeleteCourse from './DeleteCourse';
import UpdateCourse from './UpdateCourse';
import Home from './Home';

const App = () => {
  var asd;
  var jugadForColor = 1;

  return (

    <div className="App">
      <BrowserRouter>
        <center>
          <div id='title' style={{ display: 'inline-block', marginTop: '1rem', padding: '10px', paddingBottom: '5px', borderRadius: '10px', boxShadow: '0px 0px 10px' }}>
            <h1 id="title-color" style={{ fontWeight: 'bold', fontSize: '3rem', border: `solid 0.2rem`, paddingLeft: '5px', paddingRight: '5px', borderRadius: '7px' }}>Courses</h1>
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allcourses' element={<AllCourses />} />
            <Route path='/onecourse' element={<OneCourse />} />
            <Route path='/updatecourse' element={<UpdateCourse />} />
            <Route path='/deletecourse' element={<DeleteCourse />} />
          </Routes>
        </center>
      </BrowserRouter>
    </div>
  );
}

export default App;
