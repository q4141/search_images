import { useState } from "react";
import SearchBar from "./assets/components/Search Bar/SearchBar";
import ImageList from "./assets/components/Image List/ImageList";
import searchImages from "./api/api";
import  './App.css'

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
    
  };

  return (
    <div >
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      
    </div>
  );
}

export default App;
