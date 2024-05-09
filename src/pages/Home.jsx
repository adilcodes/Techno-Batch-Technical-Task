import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationModal from '../components/StationModal';

export default function Home() {
    return (
        <>
            <div className="cstm-container container-fluid d-flex flex-column">
                {/* Header */}
                <Header />

                {/* Body Start */}
                <div className="content-area mt-5 row px-4">
                    {/* Aside Bar Start */}
                    <div className="col-xl-2 col-md-3">
                        <div className="date">
                            <p className='m-0 mb-2'>
                                <span className='fw-semibold'>Date</span>
                                <span className="text-danger fw-bold">*</span>
                            </p>
                            <input type="date" name="selectedDate" className='form-control border-dark' style={{ fontSize: 14 }} />
                        </div>
                        <div className="stations mt-4">
                            <p className="m-0 mb-4">Stations</p>
                            <button className="btn border-0 text-info py-0" data-bs-toggle="modal" data-bs-target="#addStation">
                                + ADD STATION
                            </button>
                            <StationModal />
                        </div>
                    </div>
                    {/* Aside Bar End */}
                </div>
                {/* Body End */}

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
