import React from 'react';

export default function Loader() {
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
