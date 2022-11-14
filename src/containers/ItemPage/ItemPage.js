import { useState } from "react";
import { useParams } from "react-router-dom";
import catalogItems from "../../resourses/data";
import { Tag } from 'antd';
import './ItemPage.css';
import Button from "../../components/Button/Button";


function ItemPage() {
    const { id } = useParams();
    const [allItems, setIteams] = useState(catalogItems);
    const item = allItems.find((item) => item.id === +id);

    return (
        <main className="item-page">
            <div className="item-page__container">
                <div className="item-page-block">
                    <img alt="animal" className="item-page__img" src={item.image} />
                    <div className="right">
                        <div className="tags">
                            <Tag color="purple">{item.firstCharacteristic}</Tag>
                            <Tag color="geekblue">{item.secondCharacteristic}</Tag>
                        </div>
                        <h2 className="item-page__title">{item.name}</h2>
                        <div className="item-page__desc">{item.description}</div>
                        <div className="expense">Daily expense: <strong>${item.dailyExpense}</strong></div>
                        <div>
                            <span className="question">Add souvenir toy</span>
                            <select className='toy'>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="under-block">
                    <div className="price-block">Daily expense: ${item.dailyExpense}</div>
                    <div className="buttons-block">
                        <button className="first-btn">Go back</button>
                        <Button>Add to cart</Button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}


export default ItemPage;