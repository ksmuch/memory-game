import { useState } from 'react'
import { AppRoute } from './settings';
import { getImages } from './data';
import InitialPage from './components/InitialPage';
import GamePage from './components/GamePage';
import ResultsPage from './components/ResultsPage';

function App({results = []}) {
  const [page, setPage] = useState(AppRoute.Initial);
  const [result, setResult] = useState(0);
  const [images, setImages] = useState([]);
  const [sheetType, setSheetType] = useState(null);

  const showResults = (count) => {
    setResult(count);
    setPage(AppRoute.Results);
  }
  const handleReset = () => {
    setPage(AppRoute.Initial);
  }
  const handleStart = (type) => {
    const images = getImages(type);
    setImages(images);
    setPage(AppRoute.Game);
    setSheetType(type);
  };

  const getPage = (route) => {
    switch (route) {
      case AppRoute.Initial:
        return <InitialPage onStart={handleStart}/>
      case AppRoute.Game:
        return <GamePage images={images} onShowResults={showResults} sheetType={sheetType}/>;
      case AppRoute.Results:
        return (
          <ResultsPage 
            current={result}
            onResetGame={handleReset}
            results={results}
          />
        );
      default:
        return null;
    }
  }

  return getPage(page);
}

export default App
