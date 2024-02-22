

import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaPlayCircle } from 'react-icons/fa';
import { HeroCard } from '..'; 
import axios from 'axios';
import { fetchAccessToken } from '../../AccessToken';




  const HeroCarousel = () => {
    const [loading, setLoading] = useState(true);
    const [topTracks, setTopTracks] = useState<any[]>([]); 
  
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const accessToken = await fetchAccessToken(clientId, clientSecret, fetchTopTracks);
          console.log("accessToken" , accessToken);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching access token:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [clientId, clientSecret]);
  
    const fetchTopTracks = async (accessToken: string) => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/tracks',
          {
            params: {
              ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B,6habFhsOp2NvshLv26DqMb,6RUKPb4LETWmmr3iAEQktW',
              market: 'ES',
            },
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );
        const tracks = response.data.tracks;
        setTopTracks(tracks);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    if (loading) {
      return <div>Loading...</div>; 
    }

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      breakpoints={{
             // when window width is >= 320px
             320: {
              slidesPerView: 1.70,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2.20,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2.50,
              spaceBetween: 10
            },
            740: {
              slidesPerView: 2.80,
              spaceBetween: 20
            },
            840: {
              slidesPerView: 3.0,
              spaceBetween: 20
            },
            940: {
              slidesPerView: 3.30,
              spaceBetween: 20
            },
            1040: {
              slidesPerView: 3.40,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 3.80,
              spaceBetween: 20
            },
            1240: {
              slidesPerView: 4.20,
              spaceBetween: 20
            },
            1340: {
              slidesPerView: 4.80,
              spaceBetween: 20
            },
            1440: {
              slidesPerView: 5.0,
              spaceBetween: 20
            },
          }}
    >
      {topTracks.map((track) => (
        <SwiperSlide key={track.id}>
          <HeroCard
            imageUrl={track.album.images[0]?.url}
            musicType={track.name}
            trackCount={track.artists.length}
            playIcon={FaPlayCircle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
