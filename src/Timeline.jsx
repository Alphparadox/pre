import React from 'react';
import './styles.css';

const Timeline = () => {
    const timelineItems = [
        {
            img: './src/assets/image1.jpg',
            desc: 'Description for image 1.'
        },
        {
            img: './src/assets/image2.jpg',
            desc: 'Description for image 2.'
        },
        {
            img: './src/assets/image3.jpg',
            desc: 'Description for image 3.'
        },
        {
            img: './src/assets/image4.jpg',
            desc: 'Description for image 4.'
        },
        {
            img: './src/assets/image5.jpg',
            desc: 'Lexar announces the first SD card in which could store 1 terabyte.'
        },
        {
            img: './src/assets/image6.jpg',
            desc: 'Alexa added a screen with the Echo Show for video calls and visual responses.'
        },
        {
            img: './src/assets/image7.jpg',
            desc: 'Another description here.'
        },
        {
            img: './src/assets/image8.jpg',
            desc: 'Google releases Cardboard - a low-cost and do-it-yourself stereoscopic viewer for smartphones.'
        },
        {
            img: './src/assets/image9.jpg',
            desc: 'Fitbit launched the Fitbit One and Fitbit Zip with Bluetooth syncing and improved activity and sleep tracking.'
        },
        {
            img: './src/assets/image10.jpg',
            desc: 'Description for image 10.'
        }
    ];

    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': timelineItems.length }}>
                {timelineItems.map((item, index) => (
                    <div className="item" key={index} style={{ '--position': index + 1 }}>
                        <div className="image-container">
                            <img src={item.img} alt={`Year ${item.year}`} />
                           
                        </div>
                        <div className="desc">
                            <p>{item.desc}</p>
                            </div>
                    </div>
            ))}
           <img src="./src/assets/1.jpg" alt="Center Image" className="center-image" />
        </div>
        <div className="content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1 className="title" data-content="MB 2024">MB 2024</h1>
        </div>
    </div>
);
};
export default Timeline;