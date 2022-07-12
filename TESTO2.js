const axios = require("axios").default;
require("dotenv").config();

const options = {
  method: 'GET',
  url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg%3D/items?limit=50',
  headers: {Accept: 'application/json', Authorization: `Bearer ${process.env.ACCESS_TOKEN}`}
};


axios.request(options).then((response) => {  
  return response.data.data;
}).then((data) => {  
    let boardPos = {
        x: [],
        y: [],
    }

    data.forEach((returnedNote) => {
        boardPos.x.push(returnedNote.position.x)
        boardPos.y.push(returnedNote.position.y)
    })

    return boardPos;
}).then((positionObj) => {  
    
}).catch(function (error) {
  console.error(error);
});

console.log(board_x)
console.log(board_y)