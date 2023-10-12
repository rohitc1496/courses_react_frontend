import React, { useState } from "react";
import { Link } from "react-router-dom";


const DeleteCourse = () => {

    let [idToBeDeleted, setIdToBeDeleted] = useState();

    return (
        <center>
            <div className="container">
                <img src="https://github.com/rohit141996/main-images/blob/main/courses_image.png?raw=true" alt='' style={{ width: '23rem', zIndex: '-10', position: 'fixed', opacity: '0.2', top: '20%', left: '35%' }} />
                <br />
                <div className='container' style={{ position: '', top: '100%' }}>
                    <div className='row' style={{ padding: '3px', borderRadius: '0.4rem' }}>
                        <div className='col-sm-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 5px', borderRadius: '0.4rem' }}>
                            <Link to='/allcourses' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>All Courses</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                            <Link to='/onecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Single Course</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }} >
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Home Page</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                        <Link to='/updatecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Add/Update Single Course</h4></Link>
                        </div>
                    </div>
                    <br /><br />

                    <input id="idToBeDeleted" type="text" placeholder="enter the course ID"
                        onChange={e => setIdToBeDeleted(e.target.value)}
                        style={{ border: 'black solid 2px' }} />
                    <button style={{ marginLeft: '5px', backgroundColor: 'rgb(220,0,0)', color: 'white', fontWeight: 'bold'}} onClick={async()=>{
                        document.getElementById('onDeleteClick').innerHTML='';
                        console.log(idToBeDeleted);
                        var url = 'http://127.0.0.1:9595/courses/'+idToBeDeleted;
                        var data1 = await fetch(url, {
                            method:'DELETE',
                            headers:{'Content-Type':'application/json'}
                        })
                        var toAppend = document.createElement('h6');
                        toAppend.style.color='rgb(220,0,0)';
                        toAppend.innerHTML=`The course with 'ID: <h3 style="display:inline;">${idToBeDeleted}</h3>' may have deleted. Check in the <h3 style="display:inline;">All Courses</h3> OR <h3 style="display:inline;">Single Course</h3> tabs.`;
                        document.getElementById('onDeleteClick').appendChild(toAppend);
                    }}>Delete</button>
                    <br/>
                    <br/>
                    <div id="onDeleteClick">

                    </div>
                </div>
            </div>
        </center>
    )
}

export default DeleteCourse;