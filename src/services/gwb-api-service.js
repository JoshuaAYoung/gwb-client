import config from '../config';

const PaintApiService = {
  getOpps() {
    const paintUrl = `${config.API_ENDPOINT}/paints`;
    return fetch(paintUrl, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((error) => Promise.reject(error)) : res.json()
    );
  },
};

export default PaintApiService;
