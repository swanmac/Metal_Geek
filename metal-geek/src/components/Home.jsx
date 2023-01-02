import React from 'react';
import axios from 'axios'
import Artist from './Artist'
import { useNavigate } from 'react-router-dom'
import Carousel3d from "../example/Carousel3d";
import CarouselCard from "../example/CarouselCard";

import Carousel1 from "../example/images/Carousel1.png";
import Carousel2 from "../example/images/Carousel2.png";
import Carousel3 from "../example/images/Carousel3.png";
import Carousel4 from "../example/images/Carousel4.png";


export default function Home (props) {
  let navigate = useNavigate()
    const showArtist = (artist) => {
        navigate(`artist/${artist.id}`)
    }

    const getData = async () => {
      await axios.get('http://localhost:8000/artists')
      .then(res => {
          if (res) {
              
              console.log(res.data)
          }
      })
  }
    
  return (
    <div className="home-container">
      <div className='home'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            background:
              "radial-gradient(47.45% 302.83% at 97.45% 85.92%, rgba(89, 76, 244, 0.48) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(41.07% 57.4% at 8.28% 4.34%, rgba(76, 103, 244, 0.61) 0%, rgba(76, 103, 244, 0.02) 100%), rgb(21, 15, 44)",
          }}
          >
              {/* <h1> Welcome To Metal Geek </h1> */}
        <div style={{ width: 1100, height: "65vh" }}>
          <Carousel3d
            cards={[
              {
                key: 1,
                content: <CarouselCard title="War Pigs" image={Carousel1} />,
              },
              {
                key: 2,
                content: <CarouselCard title="Iron Maiden" image={Carousel2} />,
              },
              {
                key: 3,
                content: (
                  <CarouselCard title="Ozzy" image={Carousel3} />
                ),
              },
              {
                key: 4,
                content: (
                    <CarouselCard title="Paranoid" image={Carousel4} />
                  ),
                }
            ]}
            offset={2}
          />
        {/* </div>     
      </div>
      <div className="artists-container">
            <h1 id="artist-group"> Top Guitarists </h1>
          <div className="artists-wrapper">
            {props.artists.map((artist) => {
                  return (
                    <div className="artist-grid" key={artist.id} onClick={() => showArtist (artist)}>
                         <h3>{artist.name}</h3>
                         <img src={artist.photo_url}></img>
                         <p><b>Artist Bio:</b> {artist.bio}</p>
                         <p><b>Bands:</b> {artist.band}</p>
                         <p><b>Website:</b> {artist.website}</p>
                        <br />
                    </div> 
                )
            })} */}
          </div>
        </div>
    </div>
    
  )
}