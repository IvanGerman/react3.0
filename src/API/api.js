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
  .then( async (response) => { 
    const responseJsoned = await response.json();
    return responseJsoned;
  })
};


// POST request to save a new message in mongoDB
export async function postNewMessageToMongo(newMessage) {

  return await fetch(baseURL + 'messages', {
    method: 'POST', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_JWT_TOKEN
    },
    body: JSON.stringify(newMessage) 
  })
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
};


// PUT request to update a new message in mongoDB
export async function updateMessage(id, newMessage) {

  return await fetch(`${baseURL}messages/${id}`, {
    method: 'PUT', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_JWT_TOKEN
    },
    body: JSON.stringify(
      {'message': newMessage})
  })
}




// DELETE request to delete a new message in mongoDB
export async function deleteMessageRequest(messageID) {
    
  let result = await fetch(`${baseURL}messages/${messageID}`, {
    method: 'DELETE', 
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.REACT_APP_JWT_TOKEN
    }
  });
  const status = result.status;                                               
  return status;                                                                           
};