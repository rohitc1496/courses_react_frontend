import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {

    let asd3 = null;
    let asd4;
    let asd5;
    let asd6;
    const rohit = async () => {
        let asd = await fetch('http://127.0.0.1:9595/courses')
        let asd2 = await asd.json();
        console.log(asd2)
        if (Array.isArray(asd2)) {
            var rowDivWala = document.createElement('div');
            rowDivWala.className = "row"
            rowDivWala.style.justifyContent = "center"

            var idWala = document.createElement('div')
            idWala.className = "col-2"
            idWala.style.display = 'flex'
            idWala.style.alignItems = 'center'
            idWala.style.justifyContent = 'center'
            idWala.style.border = 'solid grey 0.2rem'
            idWala.style.margin = "1px"
            idWala.style.color = 'darkred'
            idWala.style.fontWeight = '5000'
            let idWalah2 = document.createElement('h2'); idWalah2.innerHTML = 'Course ID';
            idWala.appendChild(idWalah2)

            var titleWala = document.createElement('div')
            titleWala.className = "col-3"
            titleWala.style.display = 'flex'
            titleWala.style.alignItems = 'center'
            titleWala.style.justifyContent = 'center'
            titleWala.style.border = 'solid grey 0.2rem'
            titleWala.style.margin = "1px"
            titleWala.style.color = 'darkred'
            titleWala.style.fontWeight = '5000'
            let titleWalah2 = document.createElement('h2'); titleWalah2.innerHTML = 'Title';
            titleWala.appendChild(titleWalah2)

            var descriptionWala = document.createElement('div')
            descriptionWala.className = "col-6"
            descriptionWala.style.display = 'flex'
            descriptionWala.style.alignItems = 'center'
            descriptionWala.style.justifyContent = 'center'
            descriptionWala.style.border = 'solid grey 0.2rem'
            descriptionWala.style.margin = "1px"
            descriptionWala.style.color = 'darkred'
            descriptionWala.style.fontWeight = '5000'
            let descriptionWalah2 = document.createElement('h2'); descriptionWalah2.innerHTML = 'Description';
            descriptionWala.appendChild(descriptionWalah2)

            rowDivWala.appendChild(idWala);
            rowDivWala.appendChild(titleWala);
            rowDivWala.appendChild(descriptionWala);
            document.getElementById('courseList').appendChild(rowDivWala)

            asd2.forEach(element => {
                asd3 = document.createElement('div');
                asd3.className = "row"
                asd3.style.justifyContent = "center"

                asd4 = document.createElement('div')
                asd4.className = "col-2"
                asd4.style.display = 'flex'
                asd4.style.alignItems = 'center'
                asd4.style.justifyContent = 'center'
                //asd4.innerHTML=element.id;
                asd4.style.border = 'solid grey 0.2rem'
                asd4.style.margin = "1px"
                let asd4h4 = document.createElement('h4'); asd4h4.innerHTML = element.id;
                asd4.appendChild(asd4h4)

                asd5 = document.createElement('div')
                asd5.className = "col-3"
                asd5.style.display = 'flex'
                asd5.style.alignItems = 'center'
                asd5.style.justifyContent = 'center'
                // asd5.innerHTML=element.title;
                asd5.style.border = 'solid grey 0.2rem'
                asd5.style.margin = "1px"
                let asd5h4 = document.createElement('h4'); asd5h4.innerHTML = element.title;
                asd5.appendChild(asd5h4)

                asd6 = document.createElement('div')
                asd6.className = "col-6"
                asd6.style.display = 'flex'
                asd6.style.alignItems = 'center'
                asd6.style.justifyContent = 'center'
                //asd6.innerHTML=element.description;
                asd6.style.border = 'solid grey 0.2rem'
                asd6.style.margin = "1px"
                let asd6h6 = document.createElement('h6'); asd6h6.innerHTML = element.description;
                asd6.appendChild(asd6h6)

                asd3.appendChild(asd4);
                asd3.appendChild(asd5);
                asd3.appendChild(asd6);

                //asd3.innerHTML = element.id+" "+element.title+" "+element.description;

                document.getElementById('courseList').appendChild(asd3)


            });
        } else {
            if (document.getElementById('temporaryMessage')) {

            } else {
                var ifNoDataAvaialble = document.createElement('p');
                ifNoDataAvaialble.id = 'temporaryMessage'
                ifNoDataAvaialble.innerHTML = '<b>No courses are uploaded yet. Check later.</b>';
                ifNoDataAvaialble.style.color = 'darkred';
                document.getElementById('courseList').appendChild(ifNoDataAvaialble);
            }
        }
    }

    let toRun = () => {
        if (asd3 == null) {
            rohit();
        }
    }

    return (
        <center>
            <div id="courseList" className="container" style={{ marginBottom: '1rem', transition:'1000ms' }}>
                <img src="https://github.com/rohit141996/main-images/blob/main/courses_image.png?raw=true" alt='' style={{ width: '23rem', zIndex: '-10', position: 'fixed', opacity: '0.2', top: '20%', left: '35%' }} />
                <br />
                <div className='container' style={{ position: '', top: '100%' }}>
                    <div className='row' style={{ padding: '3px', borderRadius: '0.4rem' }}>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }} >
                            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Home Page</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 5px', borderRadius: '0.4rem' }}>
                            <Link to='/onecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Single Course</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                            <Link to='/deletecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Delete Single Course</h4></Link>
                        </div>
                        <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }}>
                            <Link to='/updatecourse' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>Add/Update Single Course</h4></Link>
                        </div>
                    </div>
                </div>
                <br /><br />
                <button onClick={toRun}>Click to get all courses!</button>
                <br /><br />
            </div>
        </center>
    )
}

export default AllCourses;