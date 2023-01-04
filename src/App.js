import './App.css';
import NavBar from './navigation/navBar';
import SearchBar from './search/searchBar';
import SearchResult from './search/searchResult';
import TruckDetailContainer from './truckDetail/truckDetailContainer';
import TruckListContainer from './truckList/truckListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TruckContextProvider } from './context/truckContext';
function App() {
  return (
    <div className="App">
      <TruckContextProvider>
        <BrowserRouter>
          <NavBar />
          <SearchBar />
          <Routes>
            <Route path='/' element={<TruckListContainer />}/>
            <Route path='/detail/:trucksId' element={<TruckDetailContainer />}/>
            <Route path='/search/:searchId' element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </TruckContextProvider>
    </div>
  );
}

export default App;
