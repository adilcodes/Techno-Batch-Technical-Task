import React from 'react'

export default function SingleRoute() {
    return (
        <div className="single-route d-flex gap-3 mb-4">
            <div className='col'>
                <p className='m-0 mb-2'>
                    <span className='fw-semibold'>Route</span>
                    <span className="text-danger fw-bold">*</span>
                </p>
                <select className="form-select border-black py-2 rounded-3 form-field" name='routeName'>
                    <option value="One">One</option>
                    <option value="two">two</option>
                </select>
            </div>

            <div className='col'>
                <p className='m-0 mb-2'>
                    <span className='fw-semibold'>Demand</span>
                    <span className="text-danger fw-bold">*</span>
                </p>
                <input type="number" name="routesDemand" className='form-control border-dark py-2 rounded-3 form-field' placeholder='Enter' />
            </div>

            <div className="col-2 d-flex align-items-end">
                <button className="btn btn-danger border-2 rounded-3 px-4 py-2 w-100">Remove</button>
            </div>
        </div>
    )
}
