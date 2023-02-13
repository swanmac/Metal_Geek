import axios from "axios";
import { useParams } from "react-router-dom"
import React, { useState } from "react";
import { headers } from "../services/artist.service";

export const AddGear = () => {

  let { id } = useParams()

  const initialGearState = {
    id: null,
    name: "",
    type: "",
    color: "",
    photo_url: "",
  };

  

  const [gear, setGear] = useState(initialGearState);
  const [submitted, setSubmitted] = useState(false);

  const handleGearChange = (e) => {
    const { name, value } = e.target;
    setGear({ ...gear, [name]: value });
  };

  const submitGear = () => {
    let data = {
      name: gear.name,
      type: gear.type,
      color: gear.color,
      photo_url: gear.photo_url,
    };

    axios
      .post('https://dry-peak-27830.herokuapp.com/gears-post/', data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setGear({
          id: response.data.id,
          name: response.data.name,
          type: response.data.type,
          color: response.data.color,
          photo_url: response.data.photo_url,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newGear = () => {
    setGear(initialGearState);
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
            Gear Added!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <button className="btn btn-success" onClick={newGear}>
            Add
          </button>
        </div>
      ) : (

        <div className='mx-auto flex flex-col items-center max-w-sm'>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={gear.name}
              onChange={handleGearChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              required
              value={gear.type}
              onChange={handleGearChange}
              name="type"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              required
              value={gear.color}
              onChange={handleGearChange}
              name="color"
            />
          </div>

          <div className="form-group">
            <label htmlFor="photo_url">Photo</label>
            <input
              type="img"
              className="form-control"
              id="photo_url"
              required
              value={gear.photo_url}
              onChange={handleGearChange}
              name="photo_url"
            />
          </div>

          <button
            type="submit"
            onClick={submitGear}
            className="btn btn-success mt-2"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};