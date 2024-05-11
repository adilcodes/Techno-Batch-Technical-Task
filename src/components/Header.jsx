import React, { useContext, useState } from 'react';
import { Loader } from './Loader';
import { NavLink } from 'react-router-dom';

// Context
import { StationsContextStart } from '../context/StationsContext';
import { TokenContextStart } from '../context/TokenContext';

export default function Header() {

    const { stationsList } = useContext(StationsContextStart);
    const { token } = useContext(TokenContextStart);
    const [demandSuccess, setDemandSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submitDemands = async () => {
        setIsLoading(true);
        for (let i = 0; i < stationsList.length; i++) {
            let stationId = stationsList[i].split("--").reverse()[0];
            let selectedDate = localStorage.getItem("selectedDate");

            let currentStation = JSON.parse(localStorage.getItem(stationsList[i]));

            if (currentStation !== null) {
                // Sending To Server:
                let response = await fetch("https://dev-amzdsp-api.dispatchex.com/api/RouteDemand/AddRouteDemand", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "demandCount": currentStation.demandTotal,
                        "stationId": stationId,
                        "demandDate": selectedDate,
                        "routeDemandDetail": [
                            ...currentStation?.routes
                        ]
                    })
                });

                if (response.ok) {
                    let result = await response.json();
                    if (result.response.status) {
                        setIsLoading(false)
                        setDemandSuccess(true);
                        setTimeout(() => {
                            setDemandSuccess(false);
                        }, 3000)
                    }
                }
            }
        }
    }

    if(isLoading) {return <Loader />}
    return (
        <>
            <div className="header row bg-secondary px-4 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className='p-0 m-0 text-white'>Add Demand</h3>
                    <div className="btns">
                        <NavLink to="/view-demands" className="btn btn-warning rounded-3 px-4 py-2 me-3">View Demands</NavLink>
                        <button className="btn btn-warning rounded-3 px-4 py-2" onClick={submitDemands}>Submit</button>
                    </div>
                </div>
            </div>
            {
                demandSuccess &&
                <div className="alert alert-success mt-4 mx-auto col-md-5 col-11 d-flex justify-content-center" role="alert">
                    Demand Added Successfully
                </div>
            }
        </>
    )
}