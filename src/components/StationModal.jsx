import React from 'react'

export default function StationModal() {
    return (
        <div className="modal fade" id="addStation" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            <span>Choose Station </span>
                            <span className='fw-semibold text-secondary opacity-75'>(Add Demand)</span>
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className='m-0 mb-2'>
                            <span className='fw-semibold'>Station</span>
                            <span className="text-danger fw-bold">*</span>
                        </p>
                        <form className='d-flex gap-3'>
                            <select className="form-select border-black py-2 rounded-3" name='station'>
                                <option selected disabled>Select Station</option>
                                <option value="One">One</option>
                            </select>
                            <input type="submit" name='submit-btn' className='btn btn-warning' value="ADD STATION" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
