import '../../components/Button/Button';
import React from 'react';
import FilterLocation from '../../components/Filter/FilterLocation/FilterLocation';
import FilterSize from '../../components/Filter/FilterSize/FilterSize';
import FilterType from '../../components/Filter/FilterType/FilterType';
import './Catalog.css';
import Button from '../../components/Button/Button';
import Model1 from '../../images/cottage.jpg';
import CatalogItem from '../../components/CatalogItem/CatalogItem';

const tada = [
    {
        type: "Women's black vest Gucci",
        text: "A shiny dress, a shiny dress, a shiny dress",
        location: 'Kyiv',
        image: Model1,
        price: 715,
    },
    {
        type: "Women's black vest Gucci",
        text: "A shiny dress, a shiny dress, a shiny dress",
        location: 'Lviv',
        image: Model1,
        price: 750,
    },
    {
        type: "Women's black vest Gucci",
        text: "A shiny dress, a shiny dress, a shiny dress",
        location: 'Lviv',
        image: Model1,
        price: 750,
    },
    {
        type: "Women's black vest Gucci",
        text: "A shiny dress, a shiny dress, a shiny dress",
        location: 'Lviv',
        image: Model1,
        price: 750,
    },
]

function Catalog() {
    return (
        <main className='catalog'>
            <div className='catalog__container'>
                <div className='catalog-filter-block'>
                    <div className='catalog__filters'>
                        <FilterType />
                        <FilterLocation />
                        <FilterSize />
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
                <div className='catalog__search'>
                    <input placeholder='Find item' type='text'></input>
                </div>
                <div className='catalog-block-with-card'>
                    {tada.map(({ type, text, location, image, price }, idx) => (
                        <CatalogItem
                            type={type}
                            text={text}
                            location = {location}
                            image={image}
                            price={price}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Catalog;