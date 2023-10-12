import React, { useState } from "react";
import { Link } from "react-router-dom";


const OneCourse = () => {

    let asd2 = null;
    const [idToBeSearched, setIdToBeSearched] = useState();

    return (
        <center>
            <div id="courseList" className="container">
                <img src="https://github.com/rohit141996/main-images/blob/main/courses_image.png?raw=true" alt='' style={{ width: '23rem', zIndex: '-10', position: 'fixed', opacity: '0.2', top: '20%', left: '35%' }} />
                <br />
                <div className='container' style={{ position: '', top: '100%' }}>
                    <div className='row' style={{ padding: '3px', borderRadius: '0.4rem' }}>
                        <div className='col-sm-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 5px', borderRadius: '0.4rem' }}>
                            <Link to='/allcourses' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>All Courses</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }} >
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Home Page</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                            <Link to='/deletecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Delete Single Course</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                        <Link to='/updatecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Add/Update Single Course</h4></Link>
                        </div>
                    </div>
                    <br /><br />

                    <input id="idToBeSearched" type="text" placeholder="enter the course ID"
                        onChange={e => setIdToBeSearched(e.target.value)}
                        style={{ border: 'black solid 2px' }} />
                    <button style={{ marginLeft: '5px' }} onClick={async () => {
                        console.log(idToBeSearched);
                        let url = 'http://127.0.0.1:9595/courses/' + idToBeSearched;
                        let asd = await fetch(url);
                        asd2 = await asd.json();
                        console.log(asd2)

                        if (asd2.description) {
                            var demo1 = document.createElement('h4');
                            var demo2 = document.createElement('h4');
                            var demo3 = document.createElement('h6');
                            demo1.innerHTML = "Course ID : " + asd2.id;
                            demo2.innerHTML = "Course Title : " + asd2.title;
                            demo3.innerHTML = "Course Description : " + asd2.description;

                            var demo4 = document.getElementById('contingent');
                            demo4.innerHTML = '';
                            demo4.appendChild(demo1);
                            demo4.appendChild(demo2);
                            demo4.appendChild(demo3);
                            demo4.style.color = 'black';
                        } else if (asd2.error) {
                            var demo4 = document.getElementById('contingent');
                            demo4.innerHTML = `<h4>No course with that ID exists. try again.</h4>`
                            demo4.style.color = 'rgb(220,0,0)'
                        }
                    }}>Search</button>
                    <br /><br />
                    <div id="contingent">
                        <p>search with the course ID to get more details of that course.</p>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default OneCourse;