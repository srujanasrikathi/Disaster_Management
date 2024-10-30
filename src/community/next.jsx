
import React, { useState } from 'react';
import './next.css';
import { FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import andhra from '../assets/andhra.jpg';
import telangana from '../assets/telangana.jpeg';
import kerala from '../assets/image.png';
import karnataka from '../assets/karnataka (1).jpg';
import tamilnadu from '../assets/Tamilnaducommunity.jpg'
function My() {
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const socialMediaLinks = [
        {
            Instagram: 'https://www.instagram.com/andhr_apradeshweatherman?igsh=MTIxcmQyajAyaHJxNQ==',
            Telegram: 'https://t.me/s/Disaster_News',
            Facebook: 'https://www.facebook.com/profile.php?id=61567162091280&mibextid=ZbWKwL',
            Twitter: 'https://x.com/apsdma',
            WhatsApp: 'https://chat.whatsapp.com/CdSjfZleaiK8zJ1KtQEWlc',
        },
        {
            Instagram: 'https://www.instagram.com/telanganatoday?igsh=MWZoeGFyZmgwcncyeA==',
            Telegram: 'https://t.me/DisasterManagementIndia',
            Facebook: 'https://www.facebook.com/profile.php?id=61567184650112&mibextid=ZbWKwL',
            Twitter: 'https://x.com/ndrfhq',
            WhatsApp: 'https://chat.whatsapp.com/IricydGRaGODmtQ6hoMMVq',
        },
        {
            Instagram: 'https://www.instagram.com/keraladisasterhelpdesk?igsh=aDNsbDJpejVqemVx',
            Telegram: 'https://t.me/naturaldisastersintheworld',
            Facebook: 'https://www.facebook.com/profile.php?id=61567847420546&mibextid=ZbWKwL',
            Twitter: 'https://x.com/top_disaster',
            WhatsApp: 'https://chat.whatsapp.com/LmZr8cebcpN41oKwf9ZSiG',
        },
        {
            Instagram: 'https://www.instagram.com/andhr_apradeshweatherman?igsh=MTIxcmQyajAyaHJxNQ==',
            Telegram: 'https://t.me/SirenAlerts',
            Facebook: 'https://www.facebook.com/profile.php?id=61567848110602&mibextid=ZbWKwL',
            Twitter: 'https://x.com/disasterstrat',
            WhatsApp: 'https://chat.whatsapp.com/B5Uz0yStLWM12Tgx4S6jDP',
        },
        {
            Instagram: 'https://www.instagram.com/bnglrweatherman?igsh=MWJiZjE3d2tmenV5Yw==',
            Telegram: 'https://t.me/cycloneyasa',
            Facebook: 'https://www.facebook.com/profile.php?id=61567148561794&mibextid=ZbWKwL',
            Twitter: 'https://x.com/ndmaindia',
            WhatsApp: 'https://chat.whatsapp.com/LQCFiEijxwWIia9uXCPSbd',
        },
    ];

    const cardNames = [
        'Andhra Pradesh',
        'Telangana',
        'Kerala',
        'Tamilnadu',
        'Karnataka',
    ];

    const socialMediaIcons = [
        { name: 'Instagram', icon: <FaInstagram /> },
        { name: 'Telegram', icon: <FaTelegram /> },
        { name: 'Facebook', icon: <FaFacebook /> },
        { name: 'Twitter', icon: <FaTwitter /> },
        { name: 'WhatsApp', icon: <FaWhatsapp /> },
    ];

    const handleJoinClick = (index) => {
        setActiveCardIndex(index);
    };

    const handleIconClick = (index, name) => {
        window.open(socialMediaLinks[index][name], '_blank');
    };

    const images = [
        andhra,
        telangana,
         karnataka,
         kerala,
         tamilnadu
    ];

    return (
<div className="con-j">
    <div className='com-j'>Community Forums</div>
    <div className="card-row-j">
        {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="card-container-j">
                <div className="card-j">
                    <div className="card-name-j">{cardNames[index]}</div>
                    <img src={images[index]} alt={`Card ${index + 1}`} className="card-image-j" />
                    {activeCardIndex === index ? (
                        <div className="options-j">
                            {socialMediaIcons.map((media, optionIndex) => (
                                <div key={optionIndex} className="icon-container-j">
                                    <div className="icon-j" onClick={() => handleIconClick(index, media.name)}>
                                        {media.icon}
                                    </div>
                                    <span className="icon-name-j">{media.name}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <button onClick={() => handleJoinClick(index)} className="join-button-j">
                            Join
                        </button>
                    )}
                </div>
            </div>
        ))}
    </div>
</div>

    );
};
export default My;



