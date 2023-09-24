import axios from 'axios';

// Make sure to replace this with your actual endpoint and data
// const requestData = {
//   key1: 'value1',
//   key2: 'value2',
// };

// axios.post(apiUrl, requestData)
//   .then((response) => {
//     console.log(response.data); // Handle the response data here
//   })
//   .catch((error) => {
//     console.error('There was a problem with the Axios request:', error);
//   });

  
class ApiService {
  private static apiBaseUrl = 'http://localhost:8080';

  private static defaultOptions = {
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      'Access-Control-Allow-Origin': 'http://localhost:3000', // Specify the allowed origin
    },
  };

  static sendMessage = async (message: string, type: string): Promise<any> => {
    console.log('sendMessage:', message, type)
    try {
      const response = await axios.post(`${this.apiBaseUrl}/feedback`, {message, type: type.toUpperCase()});
      console.log('response:', response); // Handle the response data here
      return response;
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
      return error;
    }
  }

  static getQueueSizes = async (): Promise<any> => {
    console.log('getQueueSizes');
    try {
      const response = await axios.get(`${this.apiBaseUrl}/feedback/size`);
      console.log('response:', response.data);
      return response.data;
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
      return error;
    }
  }

  static getHello = async (): Promise<any> => {
    console.log('getHello');
    try {
      const response = await axios.get(`${this.apiBaseUrl}/hello`, this.defaultOptions);
      console.log('response:', response.data);
      return response;
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
      return error;
    }
  }

  static setBaseUrl = (url: string): string => {
    return this.apiBaseUrl = url;
  }

  static getBaseUrl = (): string => {
    return this.apiBaseUrl;
  }
  // Other methods...
}
export default ApiService;

