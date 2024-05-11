import React from 'react';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <div className='container-fluid cstm-container d-flex flex-column justify-content-center align-items-center'>
                <div className="content-cover">
                    <h1 className='text-center'>404 Not Found!</h1>
                    <p className='p-0 m-0 text-center'>
                        <NavLink to="/" className="text-decoration-none" style={{ fontSize: 15 }}>Back To Home</NavLink>
                    </p>
                    <Footer />
                </div>
            </div>
        </>
    )
}
