import React from 'react'

export default function Home() {
  return (
    <>
        <div className="container-fluid">
            {/* Header Start */}
            <div className="header row bg-secondary px-4 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className='p-0 m-0 text-white'>Add Demand</h3>
                    <button className="btn btn-warning rounded-3 px-4 py-2">Submit</button>
                </div>
            </div>
            {/* Header End */}

            {/* Body Start */}
            <div className="row">
                {/* Aside Bar Start */}
                <div className="col-4">

                </div>
                {/* Aside Bar End */}
            </div>
            {/* Body End */}

            {/* Footer Start */}
            <div className="footer row px-4 py-2">
                <hr className='border-2 opacity-50'/>
                <p className='p-0 m-0 text-center text-secondary' style={{fontSize: 14}}>Technobatch LLC Copyright &copy; 2023 - All Rights Reserved</p>
            </div>
            {/* Footer End */}
        </div>
    </>
  )
}
