import React, { useState, useEffect } from 'react';
import { TabContainer } from '..';


const TodayTab = () => {
  const [tabData, setTabData] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  console.log("here1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lagos,Nigeria?unitGroup=metric&key=7EBN5QB723QGYFSK9FK7RUUU9&contentType=json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setTabData(data?.days || []); // Adjusted to the appropriate data structure
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, set default data, or display an error message
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tabIndex: number) => {
    if (activeTab === tabIndex) {
      setActiveTab(null);
    } else {
      setActiveTab(tabIndex);
    }
  };

  return (
    <div>
      {tabData.map((tab, index) => (
        <TabContainer
          key={index}
          isOpen={activeTab === index}
          onClick={() => handleTabClick(index)}
          weatherData={tab} // Pass each day's data as weatherData
        />
      ))}
    </div>
  );
};

export default TodayTab;
