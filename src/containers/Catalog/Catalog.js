import '../../components/Button/Button';
import React, { useState, useEffect } from 'react';

import './Catalog.css';
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import catalogItems from '../../resourses/data';

const typesAnimals = ['Filter by type', 'All types', 'Mammal', 'Bird', 'Fish', 'Reptile'];
const expenses = ['Filter by expense', 'Any expense','1-5', '5-20', '20-50', '50-100'];
let curr;

function Catalog() {
    const [items, setItems] = useState(catalogItems);
    const [value, setValue] = useState('');
    let [filterType, setFilterType] = useState('Filter by type')
    let [filterExpense, setaFilterExpense] = useState('Filter by expense')

    const filter = () => {
        let filterItems = [...catalogItems];
        if (filterType !== 'Filter by type' && filterType !== 'All types') {
            filterItems = filterItems.filter((item) => item.animType.toLowerCase() == filterType.toLowerCase());
            setItems(filterItems);
            curr = filterItems
        }
        if (filterExpense !== 'Filter by expense' && filterExpense !== 'Any expense') {
            filterItems = filterItems.filter((item) => item.dailyExpense >= filterExpense.split('-')[0] && item.dailyExpense <= filterExpense.split('-')[1]);
            setItems(filterItems);
            curr = filterItems
        }
        else {
            curr = undefined
            setItems(filterItems)
        }
        console.log(curr)
    }

    useEffect(() => {
        const searched = (data) => {
            return data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        }
        if (curr === undefined) {
            setItems(searched(catalogItems))
            console.log('not curr')
        }
        else {
            setItems(searched(curr))
            console.log('curr')
        }
    }, [value])

    return (
        <main className='catalog'>
            <div className='catalog__container'>
                <div className='catalog-filter-block'>
                    <div className='catalog__filters'>
                        <select onChange={(e) => setFilterType(e.target.value)} className="select">
                            {
                                typesAnimals.map((type) => <option key={type} value={type}>{type}</option>)
                            }
                        </select>
                        
                        <select onChange={(e) => setaFilterExpense(e.target.value)} className="select">
                            {
                                expenses.map((expense) => <option key={expense} value={expense}>{expense}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <button onClick={filter} className='button'>Apply</button>
                    </div>
                </div>
                <div className='catalog__search'>
                    <input onChange={(e) => setValue(e.target.value)} placeholder='Find item' type='text'></input>
                </div>
                <div className='catalog-block-with-card'>
                    {items.map(({ id, name, text, image, dailyExpense, animType }, idx) => (
                        <CatalogItem
                            id={id}
                            name={name}
                            text={text}
                            image={image}
                            dailyExpense={dailyExpense}
                            animType={animType}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Catalog;