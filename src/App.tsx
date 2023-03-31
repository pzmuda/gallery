import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/organisms/nav/Navigation';
import Favorites from './components/pages/favorites/Favorites';
import Gallery from './components/pages/gallery/Gallery';
import Home from './components/pages/home/Home';
import { Image } from './interface/type';

function App() {
  const [favItems, setFavItems] = useState<Image[]>([]);

  const handleAddFav: any = (fav: Image) => {
    setFavItems([...favItems,fav])
  };
  const handleRemoveFav = (fav:Image) => {
    const update = favItems.filter((item) => fav.id !== item.id);
    return setFavItems(update);
  };

  return (
    <BrowserRouter>
      <header>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/gallery'
            element={
              <Gallery onClick={handleAddFav} onRemove={handleRemoveFav} />
            }
          />
          <Route
            path='/favorite'
            element={<Favorites fav={favItems} onRemove={handleRemoveFav} />}
          />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
