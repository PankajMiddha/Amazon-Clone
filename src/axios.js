import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL:'https://us-central1-clone-9f0a1.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-9f0a1/us-central1/api'
});

export default instance;

// https://us-central1-clone-9f0a1.cloudfunctions.net/api