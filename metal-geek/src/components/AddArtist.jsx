import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "./../services/artist.service";

export const AddArtist = () => {
  const initialArtistState = {
    id: null,
    name: "",
    band: "",
    bio: "",
    website: "",
    photo_url: "",
  };

  const [artist, setArtist] = useState(initialArtistState);
  const [submitted, setSubmitted] = useState(false);

  const handleArtistChange = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const submitArtist = () => {
    let data = {
      name: artist.name,
      band: artist.band,
      bio: artist.bio,
      website: artist.website,
      photo_url: artist.photo_url,
    };

    axios
      .post('http://localhost:8000/artists', data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setArtist({
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
    setArtist(initialArtistState);
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
            Artist Added!
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
            Add
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
              value={artist.name}
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
              value={artist.band}
              onChange={handleArtistChange}
              name="band"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              className="form-control"
              id="bio"
              required
              value={artist.bio}
              onChange={handleArtistChange}
              name="bio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              required
              value={artist.website}
              onChange={handleArtistChange}
              name="website"
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo_url">Photo</label>
            <input
              type="text"
              className="form-control"
              id="photo_url"
              required
              value={artist.photo_url}
              onChange={handleArtistChange}
              name="photo_url"
            />
          </div>

          <button
            type="submit"
            onClick={submitArtist}
            className="btn btn-success mt-2"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};