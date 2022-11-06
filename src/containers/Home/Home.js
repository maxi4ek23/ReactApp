import React from 'react';
import Homie from '../../images/homie.jpg';
import './Home.css'
import Model1 from '../../images/cottage.jpg';
import Model2 from '../../images/villa.jpg';
import Model3 from '../../images/penthouse.jpg';
import CardItem from '../../components/CardItem/CardItem';

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
];


function Home() {
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
                    {data.map(({ title, image, text }, idx) => (
                        <CardItem
                            title={title}
                            image={image}
                            text={text}
                            key={idx}
                        />
                    ))}
                </div>
                <div className='home-block-with-button'>
                    <button className='home__button'>View more</button>
                </div>
            </div>
        </main>
    )
};

export default Home;