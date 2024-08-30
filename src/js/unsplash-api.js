import axios from 'axios';

const KEY = '7QaC31QWQatTvaiGVBFYsWoswGiVg-edIcET13XO0oA';
axios.defaults.baseURL = 'https://api.unsplash.com/';
const config = {
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${KEY}`,
  },
  params: {
    orientation: 'landscape',
    content_filter: 'low',
    per_page: 15,
  },
};

async function fetchImages(query, page) {
  config.params.query = query;
  config.params.page = page;

  const response = await axios.get('search/photos', config);

  return response.data.results;
}

export default fetchImages;
