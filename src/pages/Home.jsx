import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StationModal from '../components/StationModal';
import StationView from '../components/StationView';

export default function Home() {
    return (
        <>
            <div className="cstm-container container-fluid d-flex flex-column">
                {/* Header */}
                <Header />

                {/* Body Start */}
                <div className="content-area mt-4 pt-3 row px-4">
                    {/* Aside Bar Start */}
                    <div className="col-xl-2 col-md-3">
                        <div className="date">
                            <p className='m-0 mb-2'>
                                <span className='fw-semibold'>Date</span>
                                <span className="text-danger fw-bold">*</span>
                            </p>
                            <input type="date" name="selectedDate" className='form-control border-dark py-2 rounded-3 form-field' style={{ fontSize: 14 }} />
                        </div>
                        <div className="stations mt-4">
                            <p className="m-0 mb-2 fw-semibold">Stations</p>
                            <div className="stationsList mb-3">
                                <div className="single-station single-station-active p-3">
                                    <p className="m-0">
                                        → Station 13
                                    </p>
                                </div>
                                <div className="single-station p-3">
                                    <p className="m-0">
                                        → Station 14
                                    </p>
                                </div>
                                <div className="single-station p-3">
                                    <p className="m-0">
                                        → Station 15
                                    </p>
                                </div>
                            </div>
                            <button className="btn border-0 text-info py-0" data-bs-toggle="modal" data-bs-target="#addStation">
                                + ADD STATION
                            </button>
                            <StationModal />
                        </div>
                    </div>
                    {/* Aside Bar End */}

                    {/* Station View Start */}
                    <StationView />
                    {/* Station View End */}
                </div>
                {/* Body End */}

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
