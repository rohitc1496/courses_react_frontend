import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = React.memo(() => {

    return (
        <div>
            <img src="https://github.com/rohit141996/main-images/blob/main/courses_image.png?raw=true" alt='' style={{ width: '23rem', zIndex: '-10' }} />
            <div className='container' style={{ position: '', top: '100%' }}>
                <div className='row' style={{ padding: '3px', borderRadius: '0.4rem' }}>
                    <div className='col-sm-3' style={{ display: 'flex', boxShadow: '0px 0px 5px', alignItems: 'center', justifyContent: 'center', borderRadius: '0.4rem' }} >
                        <Link to='/allcourses' style={{ textDecoration: 'none', color: 'black' }}><h4 className='killer'>All Courses</h4></Link>
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
        </div>
    )
});

export default Home;