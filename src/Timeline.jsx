import React from 'react';
import './styles.css';

const Timeline = () => {
    const timelineItems = [
        {
            year: '2023',
            img: './src/assets/image1.jpg',
            desc: 'Quantum computing has continued to advance, with new breakthroughs in quantum computing hardware and software.'
        },
        {
            year: '2022',
            img: './src/assets/image2.jpg',
            desc: 'AI has continued to advance rapidly, with major breakthroughs in natural language processing, computer vision, and autonomous systems.'
        },
        {
            year: '2021',
            img: './src/assets/image3.jpg',
            desc: 'Blockchain technology has continued to gain traction, with new use cases emerging in areas such as supply chain management, finance, and healthcare.'
        },
        {
            year: '2020',
            img: './src/assets/image4.jpg',
            desc: 'The fifth generation of wireless technology promises to be much faster and more reliable than its predecessor, 4G.'
        },
        {
            year: '2019',
            img: './src/assets/image5.jpg',
            desc: 'Lexar announces the first SD card in which could store 1 terabyte.'
        },
        {
            year: '2017',
            img: './src/assets/image6.jpg',
            desc: 'Alexa added a screen with the Echo Show for video calls and visual responses.'
        },
        {
            year: '2016',
            img: './src/assets/image7.jpg',
            desc: 'Apple launched AirPods, revolutionizing wireless audio with seamless connectivity and touch controls.'
        },
        {
            year: '2014',
            img: './src/assets/image8.jpg',
            desc: 'Google releases Cardboard - a low-cost and do-it-yourself stereoscopic viewer for smartphones.'
        },
        {
            year: '2012',
            img: './src/assets/image9.jpg',
            desc: 'Fitbit launched the Fitbit One and Fitbit Zip with Bluetooth syncing and improved activity and sleep tracking.'
        },
        {
            year: '2010',
            img: './src/assets/image10.jpg',
            desc: 'Apple introduced the iPad, another revolution in portable computing.'
        }
    ];

    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': timelineItems.length }}>
                {timelineItems.map((item, index) => (
                    <div className="item" key={index} style={{ '--position': index + 1 }}>
                        <div className="image-container">
                            <img src={item.img} alt={`Year ${item.year}`} />
                            <h1>{item.year}</h1>
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