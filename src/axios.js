// Importing the axios library for making HTTP requests
import axios from 'axios';

// Creating a new instance of axios with default configuration
const instance = axios.create({
    // Setting the base URL for all the axios requests. This URL from the backend
    baseURL: 'http://localhost:9090/api'
});

// Exporting the created instance for use in other parts of the application
export default instance;
