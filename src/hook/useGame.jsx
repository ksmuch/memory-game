import { useState } from "react";

export const useGame = (images) => {
    const [finishedItems, setFinishedItems] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);
    
    const checkItems = (firstItem, secondItem) => {
        const firstCard = images.find(({id}) => id === firstItem);
        const secondCard = images.find(({id}) => id === secondItem);
        if (firstCard.url === secondCard.url) {
            setFinishedItems((items) => [...items, firstItem, secondItem]);
        }
        setStepsCount((i) => i + 1);
    };

    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

    return {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    };
};

