import React, { useContext, useRef, useState } from "react";
import { StationsContextStart } from "../context/StationsContext";

export default function StationModal() {

    // States
    const [selectedStation, setSelectedStation] = useState();
    const { stationsList, setStationsList } = useContext(StationsContextStart);

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

    let arr = ["1", "2", "3", "4"]

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
                                <option selected disabled>
                                    Select Station
                                </option>
                                {
                                    arr.map((station, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={station}
                                                disabled={stationsList.includes(station) ? true : false}
                                            >
                                                {station}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <input
                                type="submit"
                                name="submit-btn"
                                className="btn btn-warning"
                                disabled={stationsList.includes(selectedStation) ? true : false}
                                value="ADD STATION"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
