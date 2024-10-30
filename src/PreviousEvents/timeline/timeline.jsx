import React from 'react';
import { Chrono } from 'react-chrono';
import flood1 from "../../assets/images/ap flood1.webp"
import flood2 from "../../assets/images/tamilflood2.webp"
import flood3 from "../../assets/images/keralaflood2.webp"
import flood4 from "../../assets/images/tsflood2.jpg"
import { color } from 'chart.js/helpers';

const Timeline = () => {
  const events = [
    // Andhra Pradesh event
    {
      title: "November 2021",
      cardTitle: "Cyclone Jawad Warning",
      cardSubtitle: "Andhra Pradesh - IMD",
      cardDetailedText: "Cyclone Jawad was expected to make landfall in Andhra Pradesh. The India Meteorological Department issued warnings, prompting mass evacuations and preparations. Heavy rains and winds caused localized flooding in coastal districts.",
      media: {
        type: "IMAGE",
        source: {
          url: flood1,
        },
      },
    },
    // Tamil Nadu event
    {
      title: "November 2021",
      cardTitle: "Chennai Floods",
      cardSubtitle: "Tamil Nadu - Chennai",
      cardDetailedText: "Severe flooding hit Chennai in November 2021 after heavy rains associated with a low-pressure system. The city experienced waterlogging, power cuts, and traffic disruptions. Relief camps were set up to assist affected people.",
      media: {
        type: "IMAGE",
        source: {
          url: flood2, 
        },
      },
    },
    // Kerala event
    {
      title: "August 2018",
      cardTitle: "Kerala Floods",
      cardSubtitle: "Kerala - State-wide",
      cardDetailedText: "The Kerala floods of August 2018 were among the worst in the state's history, caused by unusually high rainfall during the monsoon season. The floods led to the displacement of over 1 million people and the destruction of infrastructure.",
      media: {
        type: "IMAGE",
        source: {
          url: flood3, 
        },
      },
    },
    // Telangana event
    {
      title: "October 2020",
      cardTitle: "Hyderabad Flash Floods",
      cardSubtitle: "Telangana - Hyderabad",
      cardDetailedText: "Hyderabad experienced flash floods in October 2020 due to continuous heavy rains. Many parts of the city were submerged, leading to severe traffic disruptions and damage to homes. Rescue teams were deployed to assist stranded people.",
      media: {
        type: "IMAGE",
        source: {
          url: flood4,
        },
      },
    },
  ];

  return (
    <div style={{ width: "80%", height: "600px", margin: "0 auto" ,backgroundColor: "#1b3e61"}}>
      <Chrono
        items={events}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "#0288d1",
          secondary: "#e0f7fa",
          cardBgColor: "#fff",
          cardForeColor: "#000",
        }}
        cardHeight={200}
      />
    </div>
  );
};

export default Timeline;
