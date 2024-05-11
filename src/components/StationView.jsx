import React, { useEffect, useState } from "react";
import SingleRoute from "./SingleRoute";

export default function StationView(props) {
  // States:
  const [routesDetail, setRoutesDetail] = useState({
    routes: [],
    routesNamesArr: [],
    demandTotal: 0
  });

  // Functions:
  let makeRouteRow = (e) => {
    e.preventDefault();
    setRoutesDetail({
      ...routesDetail,
      routes: [
        ...routesDetail.routes,
        {
          routeId: 0,
          routeName: "Select The Route",
          demandCount: 0,
        },
      ],
    });
  };

  let deleteRouteRow = (id) => {
    const filteredRoutes = routesDetail.routes.filter((route, index) => {
      return index !== id;
    });

    setRoutesDetail({
      ...routesDetail,
      routes: [...filteredRoutes],
      routesNamesArr: [...(filteredRoutes.map((route) => route.routeName))]
    });
  }

  let changeDemandValue = (e) => {

  }

  let changeRouteValue = (e, r_id) => {
    let updatedRoutes = routesDetail.routes.map((route, index) => {
      if (index !== r_id) {
        return route;
      }

      // Required Route
      route = {
        ...route,
        routeId: Number((e.target.value).split("--").reverse()[0]),
        routeName: e.target.value
      }
      return (route);

    });

    setRoutesDetail({
      ...routesDetail,
      routes: [...updatedRoutes],
      routesNamesArr: [...(updatedRoutes.map((route) => route.routeName))]
    });
  }

  // Effects
  useEffect(() => {
    let detailsFromLS = JSON.parse(localStorage.getItem(props.stationName));
    if (detailsFromLS) {
      setRoutesDetail({
        routes: detailsFromLS.routes,
        routesNamesArr: detailsFromLS.routesNamesArr,
        demandTotal: detailsFromLS.demandTotal,
      })
    } else {
      setRoutesDetail({
        routes: [],
        routesNamesArr: [],
        demandTotal: 0
      })
    }
  }, [props.stationName]);

  useEffect(() => {
    localStorage.setItem(props.stationName, JSON.stringify(routesDetail));
  }, [routesDetail]);

  return (
    <div className="col-xl-10 col-md-9 ps-md-5 mt-md-0 mt-5">
      <h4 className="mb-4 fw-semibold">Station Name: {props.stationName ? (props.stationName).split("--")[0] : ""}</h4>
      <p className="m-0 mb-2">
        <span className="fw-semibold">Routes Demand</span>
        <span className="text-danger fw-bold">*</span>
      </p>
      <form className="d-flex gap-4 mb-4 pb-1" onSubmit={makeRouteRow}>
        <input
          type="number"
          name="routesDemand"
          className="form-control border-dark py-2 rounded-3 form-field"
          placeholder="Enter"
          value={routesDetail.demandTotal}
        />
        <input
          type="submit"
          name="submit-btn"
          className="btn btn-primary rounded-3 add-route-btn"
          value="+ ADD ROUTE"
        />
      </form>
      <hr className="border-2 border-secondary opacity-10 mb-4" />
      <h4 className="mb-4 fw-semibold">
        <span>Route Wise </span>
        <span className="fw-semibold text-secondary opacity-75 fs-5">
          (Optional)
        </span>
      </h4>
      {/* All Routes Below */}
      <div className="allRoutes pt-3">
        {routesDetail.routes.map((singleRoute, index) => {
          return (
            <SingleRoute
              key={index}
              id={index}
              routeDemand={singleRoute.demandCount}
              routeValue={singleRoute.routeName}
              routesNames={routesDetail.routesNamesArr}
              delRouteRowHandler={deleteRouteRow}
              changeDemandValueHandler={changeDemandValue}
              changeRouteValueHandler={changeRouteValue}
            />
          );
        })}
      </div>
    </div>
  );
}
