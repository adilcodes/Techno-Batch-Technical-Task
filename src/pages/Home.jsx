import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StationModal from "../components/StationModal";
import StationView from "../components/StationView";

// Context
import { StationsContextStart } from "../context/StationsContext";

export default function Home() {
  const getDateFromLS = () => {
    let date = localStorage.getItem("selectedDate");
    return date;
  };

  // States:
  const [selectedDate, setSelectedDate] = useState(getDateFromLS());
  const { stationsList } = useContext(StationsContextStart);
  const [stationActive, setStationActive] = useState(stationsList[0]);

  // Functions:
  let changeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  let makeStationActive = (station) => {
    setStationActive(station);
  };

  // Effects
  useEffect(() => {
    setStationActive(stationsList[0]);
  }, [stationsList[0]]);

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("stationsList", JSON.stringify(stationsList));
  }, [selectedDate, stationsList]);

  return (
    <>
      <div className="cstm-container container-fluid d-flex flex-column">
        {/* Header */}
        <Header />

        {/* Body Start */}
        <div className="content-area mt-4 pt-3 row px-4">
          {/* Aside Bar Start */}
          <div className="col-xl-2 col-md-3">
            <div className="date">
              <p className="m-0 mb-2">
                <span className="fw-semibold">Date</span>
                <span className="text-danger fw-bold">*</span>
              </p>
              <input
                type="date"
                name="selectedDate"
                required
                value={selectedDate}
                onChange={changeDate}
                disabled={stationsList.length > 0 ? true : false}
                className="form-control border-dark py-2 rounded-3 form-field"
                style={{ fontSize: 14 }}
              />
            </div>
            <div className="stations mt-4">
              <p className="m-0 mb-2 fw-semibold">Stations</p>

              {/* Stations List Start */}
              <div className="stationsList mb-3">
                {stationsList.map((station, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        makeStationActive(station);
                      }}
                      className={`single-station ${stationActive == station ? "single-station-active" : ""
                        } p-3`}
                    >
                      <p className="m-0">→ {station}</p>
                    </div>
                  );
                })}
              </div>
              {/* Stations List End */}

              <button
                className={`btn border-0 ${!selectedDate || selectedDate == "null"
                    ? "text-secondary"
                    : "text-info"
                  } py-0`}
                data-bs-toggle="modal"
                data-bs-target="#addStation"
                disabled={
                  !selectedDate || selectedDate == "null" ? true : false
                }
              >
                + ADD STATION
              </button>
              <StationModal />
            </div>
          </div>
          {/* Aside Bar End */}

          {/* Station View Start */}
          {stationsList.length > 0 ? (
            <StationView stationName={stationActive} />
          ) : (
            ""
          )}
          {/* Station View End */}
        </div>
        {/* Body End */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
