import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ViewDemands() {
  return (
    <div className="cstm-container container-fluid d-flex flex-column">
      {/* Header */}
      <Header />

      {/* Body Start */}
      <div className="mt-4 pt-2 row px-4">
        {/* Filters Start */}
        <div className="filters d-flex flex-md-nowrap flex-wrap gap-4 mb-3">
          <div className='col-md col-12'>
            <p className='m-0 mb-2'>
              <span className='fw-semibold'>Created From</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <input type="date" name="createdFrom" className='form-control border-dark py-2 rounded-3 form-field' />
          </div>
          <div className='col-md col-12'>
            <p className='m-0 mb-2'>
              <span className='fw-semibold'>Created To</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <input type="date" name="createdTo" className='form-control border-dark py-2 rounded-3 form-field' />
          </div>
          <div className='col-md col'>
            <p className='m-0 mb-2'>
              <span className='fw-semibold'>Station</span>
              <span className="text-danger fw-bold">*</span>
            </p>
            <select className="form-select border-black py-2 rounded-3 form-field" name='stationId'>
              <option value="One">Hello World</option>
              <option value="two">two</option>
            </select>
          </div>
          <div className="col-sm-2 col-4 col d-flex align-items-end">
            <button className="btn btn-warning border-2 rounded-2 px-2 py-2 w-100">Filter</button>
          </div>
        </div>
        {/* Filters End */}

        {/* Table Start */}
        
        {/* Table End */}
      </div>
      {/* Body End */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
