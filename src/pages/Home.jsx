import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StationModal from "../components/StationModal";
import StationView from "../components/StationView";

// Context
import { StationsContextStart } from "../context/StationsContext";
import { TokenContextStart } from "../context/TokenContext";
import { RoutesContextStart } from "../context/RoutesContext";

export default function Home() {
  const getDateFromLS = () => {
    let date = localStorage.getItem("selectedDate");
    return date;
  };

  // States:
  const [selectedDate, setSelectedDate] = useState(getDateFromLS());
  const { stationsList } = useContext(StationsContextStart);
  const { token } = useContext(TokenContextStart);
  const { setRoutes } = useContext(RoutesContextStart);
  const [stationActive, setStationActive] = useState(stationsList[0]);
  const [isLoading, setIsLoading] = useState(false);

  // Functions:
  let changeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  let makeStationActive = async (station) => {
    setIsLoading(true);
    setStationActive(station);
    let stationId = station ? station.split("--").reverse()[0] : "";

    // Fetch Routes:
    let response = await fetch(`https://dev-amzdsp-api.dispatchex.com/api/Stations/GetStationById?Id=${stationId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (response.ok) {
      let result = await response.json();
      setRoutes(result.response.routes);
      setIsLoading(false);
    }
  };

  // Effects
  useEffect(() => {
    setStationActive(stationsList[0]);
    makeStationActive(stationsList[0])
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
                      <p className="m-0">→ {station.split("--")[0]}</p>
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
          {
            stationsList.length > 0 ? (
              <StationView
                stationName={stationActive}
                loading = {isLoading}
              />
            ) : (
              ""
            )
          }
          {/* Station View End */}
        </div>
        {/* Body End */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
