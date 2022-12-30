import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL, headers } from "./../services/artist.service";
import { useNavigate } from "react-router-dom";

export const ArtistList = () => {
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();

  const [deleted, setDeleted] = useState(false);

  const retrieveAllArtist = () => {
    axios
      .get(`${baseURL}/artist/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setArtist(response.data);
        console.log(artist);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteArtist = (id) => {
    axios
      .delete(`${baseURL}/artist/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setDeleted(true);
        retrieveAllArtist();
      })
      .catch((e) => {
        console.error(e);
      });
  };


  useEffect(() => {
    retrieveAllArtist();
  }, [retrieveAllArtist]);

  const handleUpdateClick = (id) => {
    navigate(`/artist/${id}/update/`);
  };
  return (
    <div className="row justify-content-center">
      <div className="col">
        {deleted && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Artist deleted!
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

        {artist &&
          artist.map((artist) => (
            <div key={artist.id} className="card my-3 w-25 mx-auto">
              <div className="card-body">
                <h2 className="card-title font-weight-bold">{artist.name}</h2>
                <h4 className="card-subtitle mb-2">{artist.band}</h4>
                <p className="card-text">{artist.bio}</p>
                <p className="card-text">{artist.website}</p>
                <p className="card-text">{artist.photo_url}</p>
              </div>
              <div className="card-footer">
                <div
                  className="btn-group justify-content-around w-75 mb-1 "
                  data-toggle="buttons"
                >
                  <span>
                    <button
                      className="btn btn-info"
                      onClick={() => handleUpdateClick(artist.id)}
                    >
                      Update
                    </button>
                  </span>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteArtist(artist.id)}
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