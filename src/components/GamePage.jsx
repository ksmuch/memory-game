import { useGame } from "../hook/useGame";

import GameHeader from "./GameHeader";
import Grid from "./Grid";
import Modal from "./Modal";

function GamePage({images = [], onShowResults, sheetType}) {
    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(images);

    const handleResultsClick = () => {
        onShowResults(stepsCount);
    };

    return (
        <section className = "game container">
            <GameHeader value={finishedItems.length} max={images.length} steps={stepsCount}/>
            <Grid 
                images={images} 
                finishedItems={finishedItems} 
                checkItems = {checkItems}
                sheetType = {sheetType}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
                    <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
                </Modal>
            )}
        </section>
    );
};

export default GamePage;