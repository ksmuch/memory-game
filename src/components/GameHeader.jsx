function GameHeader({value, max, steps}) {
    return (
        <>
            <div className="progress-wrapper">
                <div className="progress" style={{width: `${value/max * 100}%`}}></div>
            </div>
            <p className="progress-description">Открыто <span>{value/2}</span> / <span>{max/2}</span></p>
            <div className="steps">Шаг {steps}</div>
        </>
    );
};

export default GameHeader;