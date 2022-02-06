import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListCard from '../components/ListCard';

export default function Events() {

    const [events, setEvents] = useState<any>(null);
    const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);
  
    useEffect(() => {
      axios.get("https://lldev.thespacedevs.com/2.2.0/event/upcoming").then((response) => {
        const events = response.data.results;
        console.log(events);
        setEvents(events);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
    useEffect(() => {
      if (events != null) {
        setHasFetchedData(true);
      }
    }, [events]);

  return (
      <div className="bg-gray-900">
        {hasFetchedData == true 
            ? events.map((event : any, index : Number) =>{
                return <ListCard key={index} event={event} />
            })
            : null
        }
      </div>
  );
}
