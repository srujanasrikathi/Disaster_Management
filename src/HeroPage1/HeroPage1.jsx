import React from "react";
import './HeroPage1.css';
import Disasters from "../Disasters/Disasters";
import Disasters2 from "../Disasters2/Disasters2";
import Cyclone from '../assets/cyclone.jpg'
import Floods from '../assets/floods.jpg';
import Tsunami from '../assets/tsunami.jpg';
import HeatWaves from '../assets/heatwaves.jpg';
import Rainfall from '../assets/rainfall.jpg';
import thunderstorm from '../assets/thunderstorm.jpg';
import Footer from "../Footer/Footer";
function HeroPage1() {
    return (
        <div className="container">
            <div className="tagline" id="heading">
                Be Ready for <span>Tomorrow</span>, Today: Your Guide to <span>Disaster Preparedness</span>
            </div>

            <Disasters pic={Cyclone} name="Cyclone" des="A cyclone is a large-scale air mass that rotates around a strong center of low atmospheric pressure. It is characterized by spiraling winds that move inward and upward, usually accompanied by severe weather conditions such as heavy rain, thunderstorms, and high winds. Cyclones can occur in various parts of the world and are classified based on their intensity and location. In tropical regions, they are often called hurricanes or typhoons, while in mid-latitude regions, they may be referred to as extratropical cyclones. The destructive power of a cyclone comes from its strong winds, torrential rainfall, and potential to cause flooding, storm surges, and damage to infrastructure. Cyclones are monitored closely by meteorologists due to their potential for widespread devastation" />
            <Disasters2 pic={Floods} name="Floods" des="
Floods are natural disasters caused by an overflow of water, submerging normally dry land. They can result from various factors, such as excessive rainfall, overflowing rivers, storm surges, or the rapid melting of snow and ice. Floods can develop quickly, known as flash floods, or more slowly in areas prone to seasonal flooding. The impact of floods is often devastating, leading to loss of life, destruction of homes, infrastructure damage, and disruption of agriculture and industry. In addition to immediate physical destruction, floods can cause long-term environmental and economic consequences, such as soil erosion, contamination of water supplies, and displacement of communities. Effective flood management strategies, including early warning systems, resilient infrastructure, and sustainable urban planning, are crucial to mitigate their effects."/>
            <Disasters pic={Tsunami} name="Tsunami" des="A tsunami is a series of powerful ocean waves typically caused by underwater disturbances such as earthquakes, volcanic eruptions, or landslides. These disturbances displace large amounts of water, generating waves that travel across the ocean at high speeds, often exceeding 500 km/h (310 mph). When these waves approach shallow coastal areas, their speed decreases but their height increases dramatically, sometimes reaching heights of over 30 meters (100 feet). Tsunamis can cause widespread destruction when they make landfall, flooding coastal communities, damaging infrastructure, and posing significant risks to human lives and ecosystems. Early warning systems and preparedness measures are critical for minimizing the impact of tsunamis." />
            <Disasters2 pic={HeatWaves} name="HeatWaves" des='"Heat Waves" refers to prolonged periods of excessively hot weather, often accompanied by high humidity, that can last several days to weeks. These extreme temperature spikes occur when high-pressure systems trap warm air in a region, preventing cooler air from moving in. Heat waves pose serious health risks, such as heat exhaustion and heatstroke, especially for vulnerable populations like the elderly and children. They can also lead to environmental stress, with droughts, wildfires, and crop failures. As climate change intensifies, heat waves are becoming more frequent and severe across the globe' />
            <Disasters pic={Rainfall} name="Rain Fall" des="Rainfall refers to the precipitation of water in the form of droplets from the atmosphere, falling to the ground as a result of condensation of water vapor in the clouds. It is a crucial part of the Earth's water cycle, replenishing freshwater sources like rivers, lakes, and groundwater. Rainfall occurs when clouds become saturated with moisture, causing droplets to combine and grow heavy enough to overcome air resistance. The intensity and frequency of rainfall can vary, ranging from light drizzles to heavy downpours, and it plays a key role in sustaining ecosystems, supporting agriculture, and influencing weather patterns." />
            <Disasters2 pic={thunderstorm} name="Thunderstorm" des="A thunderstorm is a powerful and dynamic weather phenomenon characterized by the presence of lightning, thunder, heavy rainfall, and sometimes hail or strong winds. It occurs when warm, moist air rises rapidly and cools, leading to the formation of cumulonimbus clouds. As the air cools and condenses, electrical charges build up within the cloud, resulting in lightning. The sudden expansion of air caused by lightning produces the sound of thunder. Thunderstorms can vary in intensity, ranging from brief showers with minor lightning to severe storms with dangerous winds, flash flooding, and even tornadoes. They are often dramatic, with dark skies, intense flashes of light, and rumbling sounds that echo for miles" />
            <Footer/>
        </div>
    );
}

export default HeroPage1;
