import { useState } from "react";
import SearchBar from "./Search Bar/SearchBar";
import ImageList from "./Image List/ImageList";
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
