import React from 'react';
import SingleRoute from './SingleRoute';

export default function StationView() {
    return (
        <div className='col-xl-10 col-lg-9 ps-5'>
            <h4 className='mb-4 fw-semibold'>Station Name: St-15</h4>
            <p className='m-0 mb-2'>
                <span className='fw-semibold'>Routes Demand</span>
                <span className="text-danger fw-bold">*</span>
            </p>
            <form className='d-flex gap-4 mb-4 pb-1'>
                <input type="number" name="routesDemand" className='form-control border-dark py-2 rounded-3 form-field' placeholder='Enter' />
                <input type="submit" name='submit-btn' className='btn btn-primary rounded-3 add-route-btn' value="+ ADD ROUTES" />
            </form>
            <hr className='border-2 border-secondary opacity-10 mb-4' />
            <h4 className="mb-4 fw-semibold">
                <span>Route Wise </span>
                <span className='fw-semibold text-secondary opacity-75 fs-5'>(Optional)</span>
            </h4>
            {/* All Routes Below */}
            <div className="allRoutes pt-3">
                <SingleRoute />
                <SingleRoute />
            </div>
        </div>
    )
}