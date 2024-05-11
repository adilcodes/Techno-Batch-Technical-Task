import React from 'react'

export default function DemandHeader() {
    return (

        <div className="header row bg-secondary px-4 py-3">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className='p-0 m-0 text-white'>View Demands</h3>
                <button className="btn btn-warning rounded-3 px-4 py-2">Add Demand</button>
            </div>
        </div>

    )
}
