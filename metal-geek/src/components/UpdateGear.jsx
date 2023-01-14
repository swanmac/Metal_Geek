import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { headers } from "../services/artist.service";


export const UpdateGear = () => {
    const initialGearState = {
        id: null,
        name: "",
        type: "",
        color: "",
        photo_url: "",
      };

      let { id } = useParams();

      const [currentGear, setCurrentGear] = useState(initialGearState);
      const [submitted, setSubmitted] = useState(false);
    
      useEffect(() => {
        getGear();
      }, []);
    
      const handleGearChange = (e) => {
        const { name, value } = e.target;
        setCurrentGear({ ...currentGear, [name]: value });
      };
    
      const getGear = () => {
        axios
          .get('https://dry-peak-27830.herokuapp.com/gears/', {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setCurrentGear({
              id: response.data.id,
              name: response.data.name,
              type: response.data.type,
              color: response.data.color,
              photo_url: response.data.photo_url,
            });
            // console.log(gears);
          })
          .catch((e) => {
            console.error(e);
          });
      };
    
      const updateGear = () => {
        let data = {
          name: currentGear.name,
          type: currentGear.type,
          color: currentGear.color,
          photo_url: currentGear.photo_url,
        };
    
        axios
          .put(`https://dry-peak-27830.herokuapp.com/gears/${id}`, data, {
            headers: {
              headers,
            },
          })
          .then((response) => {
            setCurrentGear({
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
        setCurrentGear(initialGearState);
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
                Gear Updated!
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
                  value={currentGear.name}
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
                  value={currentGear.type}
                  onChange={handleGearChange}
                  name="type"
                  default
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="color">Color</label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  required
                  value={currentGear.color}
                  onChange={handleGearChange}
                  name="color"
                  default
                />
              </div>


              <div className="form-group">
                <label htmlFor="photo_url">Photo</label>
                <input
                  type="img"
                  className="form-control"
                  id="photo_url"
                  required
                  value={currentGear.photo_url}
                  onChange={handleGearChange}
                  name="photo_url"
                  default
                />
              </div>
    
              <button onClick={updateGear} className="btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };