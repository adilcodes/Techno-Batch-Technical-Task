import React, { useContext, useEffect, useRef, useState } from "react";
import { StationsContextStart } from "../context/StationsContext";
import { TokenContextStart } from "../context/TokenContext";

export default function StationModal() {

    // States
    const [selectedStation, setSelectedStation] = useState("");
    const { stationsList, setStationsList } = useContext(StationsContextStart);
    const { token } = useContext(TokenContextStart);
    const [fetchedStations, setFetchedStations] = useState([]);

    // Refs
    const dismissModal = useRef("")

    //   Functions
    let changeStation = (e) => {
        setSelectedStation(e.target.value);
    }

    let addStationFormHandler = (e) => {
        e.preventDefault();
        // Add Station In StationsList
        setStationsList([...stationsList, selectedStation])

        // Dismiss The Model
        dismissModal.current.click();
    }

    // Fetching Stations
    const fetchingStations = async () => {
        let response = await fetch("https://dev-amzdsp-api.dispatchex.com/api/Stations/getallStation", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "filterModel": {
                    "createdFrom": "2023-01-08",
                    "createdTo": "2024-05-08",
                    "start": 0,
                    "length": 1000,
                    "search": "",
                    "sortDir": "desc",
                    "sortCol": 0
                },
                "stationTypeId": 0
            })
        });

        if (response.ok) {
            let result = await response.json();
            setFetchedStations(result.response.data);
        }
    }

    // Effects
    useEffect(() => {
        fetchingStations();
    }, [])

    return (
        <div
            className="modal fade"
            id="addStation"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            <span>Choose Station </span>
                            <span className="fw-semibold text-secondary opacity-75">
                                (Add Demand)
                            </span>
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ref={dismissModal}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="m-0 mb-2">
                            <span className="fw-semibold">Station</span>
                            <span className="text-danger fw-bold">*</span>
                        </p>
                        <form className="d-flex gap-3" onSubmit={addStationFormHandler}>
                            <select
                                className="form-select border-black py-2 rounded-3"
                                name="selectedStation"
                                required
                                value={selectedStation}
                                onChange={changeStation}
                            >
                                <option disabled value="">
                                    Select Station
                                </option>
                                {
                                    fetchedStations.map((station, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={station.StationName + "--" + station.StationId}
                                                disabled={stationsList.includes(station.StationName + "--" + station.StationId) ? true : false}
                                            >
                                                {station.StationName}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <input
                                type="submit"
                                name="submit-btn"
                                className="btn btn-warning"
                                disabled={(stationsList.includes(selectedStation)) || (selectedStation == "") ? true : false}
                                value="ADD STATION"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
