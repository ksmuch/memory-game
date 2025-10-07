function Card({item, isVisible, isFinished, onCardClick}) {
    const {id, url} = item;

    const className = `card ${
        isVisible ? "card-show" : ""
    } ${
        isFinished ? "card-finished" : ""
    }`;
    
    const handleClick = () => {
        if (isFinished) {
            return;
        }
        onCardClick(id);
    };

    return (
        <li key={id} className={className} onClick = {handleClick}>
            <img src={import.meta.env.BASE_URL + url} width="204" height="144" alt="Котик" />
        </li>
    );
};

export default Card;