import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdateCourse = () => {
    var asd2;
    let [idToBeSearched, setIdToBeSearched] = useState();

    let [idToBeUpdated, setIdToBeUpdated] = useState();
    let [titleToBeUpdated, setTitleToBeUpdated] = useState('');
    let [descriptionToBeUpdated, setDescriptionToBeUpdated] = useState('');
    

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
                            <Link to='/deletecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Delete Single Course</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Home Page</h4></Link>
                        </div>
                    </div>
                    <br /><br />

                    {/* /////////////////////////////////////////////////////////////////////////////////// */}

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
                            var linerrr = document.createElement('p');
                            linerrr.innerHTML = '-----------------------------------------------------------'
                            demo4.appendChild(linerrr)
                            
                        } else if (asd2.error) {
                            var demo4 = document.getElementById('contingent');
                            demo4.innerHTML = `<h4>No course with that ID exists. try again.</h4>`
                            demo4.style.color = 'rgb(220,0,0)'
                            var linerrr = document.createElement('p');
                            linerrr.innerHTML = '-----------------------------------------------------------'
                            linerrr.style.color = 'black';
                            demo4.appendChild(linerrr)
                        }
                    }}>Search</button>
                    <br />
                    <div id="contingent">
                        <p>search with the course ID to get more details of that course, SO IT WILL BE EASY TO UPDATE DETAILS OF THAT COURSE USING THE FORM GIVEN BELOW.</p>
                        
                        <p>-----------------------------------------------------------</p>
                    </div>

                    {/* ////////////////////////////////////////////////////////////////////////////////////// */}
                    <div id="formToUpdate">
                        <h4>Fill this form with correct details to,</h4>
                        <h4>Update an existing Course</h4>
                        <h4>OR</h4>
                        <h4>Add a new Course</h4>

                        <input id="idInput" type="number" placeholder="Course ID"  onChange={e=>setIdToBeUpdated(e.target.value)} style={{marginTop:'0.2rem', textAlign:'center'}}/><br/>

                        <input id="titleInput" type="text" placeholder="Course Title" onChange={e=>setTitleToBeUpdated(e.target.value)} style={{marginTop:'0.2rem', textAlign:'center'}}/><br/>

                        <textarea id="descriptionInput" cols='60' rows='3' type="text" placeholder="Course Description" onChange={e=>setDescriptionToBeUpdated(e.target.value)} style={{marginTop:'0.2rem', textAlign:'center'}}/><br/>

                        <div id="hiddenMessage"></div>

                        <button style={{marginTop:'0.1rem', marginBottom:'1rem'}} onClick={async()=>{
                            document.getElementById('hiddenMessage').innerHTML=''

                            var url = 'http://127.0.0.1:9595/courses';
                            var id = idToBeUpdated;
                            var title = titleToBeUpdated;
                            var description = descriptionToBeUpdated;

                            var onClickInformation = document.createElement('p');

                            if(!((titleToBeUpdated == (undefined || '')) || (descriptionToBeUpdated == (undefined || '')))){
                                fetch(url, {
                                    method:'PUT',
                                    headers:{'Content-Type':'application/json'},
                                    body: JSON.stringify({id,title, description})
                                })
                                .then(result=>result.json())
                                .then(resulttt=> console.log(resulttt));
    
                                
                                onClickInformation.style.color = 'green';
                                onClickInformation.innerHTML = `'Your existing course may have updated' OR 'Your new course may have added'<br>Check in 'All Courses' OR 'Single Course' tab`;
                                document.getElementById('hiddenMessage').appendChild(onClickInformation);                                
                            } else {
                                onClickInformation.style.color = 'darkred';
                                onClickInformation.innerHTML = `make sure the <b>Title</b> and <b>Description</b> field is not empty`;
                                document.getElementById('hiddenMessage').appendChild(onClickInformation)
                            }

                        }}>Update</button>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default UpdateCourse;