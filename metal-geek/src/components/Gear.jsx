import axios from "axios";
import React, { useState, useEffect } from "react";
import { headers } from "../services/artist.service";
import { useNavigate } from "react-router-dom";

export const Gear = () => {
  const [gear, setGear] = useState([]);
  const navigate = useNavigate();

  const [deleted, setDeleted] = useState(false);

  const retrieveAllGear = () => {
    axios
      .get('http://localhost:8000/gears/', {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setGear(response.data);
        console.log(gear);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteGear = (id) => {
    axios
      .delete('http://localhost:8000/gears/', {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllGear();
      })
      .catch((e) => {
        console.error(e);
      });
  };


  useEffect(() => {
    retrieveAllGear();
  }, [retrieveAllGear]);

  const handleUpdateClick = (id) => {
    navigate(`/gears/${id}/update/`);
  };
  return (
    <div className="row justify-content-center">
      <div className="col">
        {deleted && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Gear deleted!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {gear &&
          gear.map((gear) => (
            <div key={gear.id} className="card my-3 w-25 mx-auto">
              <div className="card-body">
                <h2 className="card-title font-weight-bold">{gear.name}</h2>
                <h4 className="card-text">{gear.photo_url}</h4>
                <p className="card-text">{gear.type}</p>
                <p className="card-text">{gear.color}</p>
              </div>
              <div className="card-footer">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateClick(gear.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteGear(gear.id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};