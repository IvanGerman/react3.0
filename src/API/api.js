const baseURL = 'http://localhost:3001/api/';


// GET request for all messages from mongoDB
export async function getAllMessages() { 

  return await fetch(baseURL + 'messages', { 
    method: 'GET', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_JWT_TOKEN
    }
  })
};

