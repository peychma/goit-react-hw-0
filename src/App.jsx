import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import fetchImages from './Api';
import { Toaster } from 'react-hot-toast';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        if (data.results.length === 0) {
          setHasMore(false);
          return;
        }
        setImages(prevImages => prevImages.concat(data.results));
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images. Please try again later.'); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = searchTerm => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]);
    setHasMore(true);
  };

  const openModal = (imageUrl, altText) => {
    setSelectedImage({ imageUrl, altText });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Toaster/>
      <SearchBar onSubmit={handleSubmit} />
      {error ? (<ErrorMessage message={error} />) : (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn onClick={handleLoadMore} hasMore={hasMore} />
          <Loader loading={loading} />
          <ImageModal
            imageUrl={selectedImage.imageUrl}
            altText={selectedImage.altText}
            isOpen={modalIsOpen}
            closeModal={closeModal}
          />
        </>)}
      </div>
  )
}

export default App;
