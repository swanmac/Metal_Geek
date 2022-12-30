import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "./../services/artist.service";

export const UpdateArtist = () => {
    const initialArtistState = {
        id: null,
        name: "",
        band: "",
        bio: "",
        website: "",
        photo_url: "",
      };

      let { id } = useParams();

      const [currentArtist, setCurrentArtist] = useState(initialArtistState);
      const [submitted, setSubmitted] = useState(false);
    
      useEffect(() => {
        retrieveArtist();
      }, []);
    
      const handleArtistChange = (e) => {
        const { name, value } = e.target;
        setCurrentArtist({ ...currentArtist, [name]: value });
      };
    
      const retrieveArtist = () => {
        axios
          .get(`${baseURL}/artist/${id}/`, {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setCurrentArtist({
              id: response.data.id,
              name: response.data.name,
              band: response.data.band,
              bio: response.data.bio,
              website: response.data.website,
              photo_url: response.data.photo_url,
            });
            console.log(currentArtist);
          })
          .catch((e) => {
            console.error(e);
          });
      };
    
      const updateArtist = () => {
        let data = {
          name: currentArtist.name,
          band: currentArtist.band,
          bio: currentArtist.bio,
          website: currentArtist.website,
          photo_url: currentArtist.photo_url,
        };
    
        axios
          .put(`${baseURL}/artist/${id}/`, data, {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setCurrentArtist({
              id: response.data.id,
              name: response.data.name,
              band: response.data.band,
              bio: response.data.bio,
              website: response.data.website,
              photo_url: response.data.photo_url,
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch((e) => {
            console.error(e);
          });
      };
    
      const newArtist = () => {
        setCurrentArtist(initialArtistState);
        setSubmitted(false);
      };
    
      return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Artist Updated!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newArtist}>
                Update
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={currentArtist.name}
                  onChange={handleArtistChange}
                  name="name"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="band">Band</label>
                <input
                  type="text"
                  className="form-control"
                  id="band"
                  required
                  value={currentArtist.description}
                  onChange={handleArtistChange}
                  name="band"
                  default
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  required
                  value={currentArtist.description}
                  onChange={handleArtistChange}
                  name="bio"
                  default
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  required
                  value={currentArtist.description}
                  onChange={handleArtistChange}
                  name="website"
                  default
                />
              </div>

              <div className="form-group">
                <label htmlFor="photo_url">Photo</label>
                <input
                  type="text"
                  className="form-control"
                  id="photo_url"
                  required
                  value={currentArtist.description}
                  onChange={handleArtistChange}
                  name="photo_url"
                  default
                />
              </div>
    
              <button onClick={updateArtist} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };