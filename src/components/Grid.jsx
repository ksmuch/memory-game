import { useState } from "react";
import { TIMEOUT } from "../settings";
import Card from "./Card";
 
function Grid({images, finishedItems, checkItems, sheetType}) {
    const [visibleItems, setVisibleItems] = useState([]);

    const handleCardClick = (id) => {
        if (visibleItems.includes(id) || finishedItems.includes(id)) {
            return;
        }
        switch (visibleItems.length) {
            case 0:
                setVisibleItems([id]);
                break;
            case 1:
                setVisibleItems((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout (() => {
                    setVisibleItems([]);
                }, TIMEOUT);
                break;
            default:
                setVisibleItems([]);
        }
    };

    const cards = images.map((item) => (
        <Card
            key = {item.id}
            item = {item}
            isVisible = {visibleItems.includes(item.id)}
            isFinished = {finishedItems.includes(item.id)}
            isChecking = {visibleItems.length === 2}
            onCardClick = {handleCardClick}
        />
    ));

    return (
        <ul className = {`cards cards-theme-${sheetType}`}>
            {cards}
        </ul>
    );
};

export default Grid;