import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'VEn7OnQrC5I2k9aD65cPCiPoIj1tNtTcXWFKDlK1YBE';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`${API_URL}/search/photos`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query,
        page,
        per_page: 9,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default fetchImages;