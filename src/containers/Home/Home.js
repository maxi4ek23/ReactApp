import React from 'react';
import Homie from '../../images/homie.jpg';
import './Home.css'
import Model1 from '../../images/cottage.jpg';
import Model2 from '../../images/villa.jpg';
import Model3 from '../../images/penthouse.jpg';
import CardItem from '../../components/CardItem/CardItem';
import { useState } from 'react';

const data = [
    {
        title: "Cottages",
        image: Model1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Villas",
        image: Model2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Penthouses",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Penthouses",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Penthouses",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Penthouses",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Penthouses",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
];


function Home() {
    const [numberItems, setNumberItems] = useState(3);
    const currentData = data.slice(0, numberItems);
    const [dataLength] = useState(data.length);
    const [visible, setVisible] = useState(true);
    const block = document.querySelector('.home-block-with-card');

    const removeElement = () => {
        setVisible((prev) => !prev);
    };

    const showMoreItems = () => {
        console.log(numberItems)
        console.log(dataLength)
        if (numberItems + 3 >= dataLength) {
            removeElement();
            block.style.paddingBottom = '120px';
        }
        setNumberItems(numberItems + 3);
    }
    return (
        <main className="home">
            <div className="home__container">
                <div className='home-block-with-img'>
                    <img src={Homie} alt="heading" className="home__img" />
                    <div className="home__info">
                        <h1 className="home__title">FindHomiie is the best place to buy dwelling!</h1>
                        <div className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit.
                            Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.</div>
                    </div>
                </div>
                <div className='home-block-with-card'>
                    {currentData.map(({ title, image, text }, idx) => (
                        <CardItem
                            title={title}
                            image={image}
                            text={text}
                            key={idx}
                        />
                    ))}
                </div>
                {visible && (
                    <div className='home-block-with-button'>
                        <button onClick={showMoreItems} className='home__button'>View more</button>
                    </div>
                )}
            </div>
        </main>
    )
};

export default Home;