import React from 'react';

export function Loader() {
    return (
        <div className="container-fluid">
            <div className="loader-container d-flex justify-content-center align-items-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export function SmallLoader() {
    return (
        <div className="col-xl-10 col-md-9 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}