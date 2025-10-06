import getDeclension from '@dubaua/get-declension/dist/get-declension.min.js';

function ResultsPage({results, current, onResetGame}) {
    const wordsDeclension = getDeclension({
        count: current,
        one: 'шаг', few: 'шага', many: 'шагов' 
    })

    const sortedResults = [
        ...results,
        {name: 'Ваш результат', stepsCount: current}
    ].sort((a, b) => a.stepsCount - b.stepsCount);

    const resultsRows = sortedResults.map(({name, stepsCount}, index) => (
        <tr 
            key={name}
            className={`result-table-row ${name === 'Ваш результат' ? 'active' : ''}`}
        >
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{stepsCount}</td>
        </tr>
    ));
    
    return (
        <section className="result container">
            <h2>Лучшие результаты:</h2>
            <p>Вы завершили игру за <b>{wordsDeclension}</b>, так держать!</p>
            <table className="result-table">
                <thead>
                    <tr className="result-table-row">
                        <th>Место</th>
                        <th>Имя</th>
                        <th>Шаги</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsRows}
                </tbody>
            </table>
            <p>Хотите попробовать ещё раз?</p>
            <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
        </section>
    );
};

export default ResultsPage;