import { Settings } from './config/config.js';

// Module...

export default class HttpClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async get() {
    try {
      const uri = Settings.apiUrl + '/' + this.endpoint;
      console.log(uri);
      const response = await fetch(uri, {
        method: 'GET',
        headers: {
          'x-apikey': Settings.apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
      } else {
        throw new Error(
          `Det gick fel: ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
