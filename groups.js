/* This program creates three sticky note groups */

const axios = require("axios").default;
require("dotenv").config();
const data = require("./DATA-TWO");

// Tracks sticky notes count on each group
var item_count_grp_1 = -1
var item_count_grp_2 = -1
var item_count_grp_3 = -1

// Used to offset when a breakpoint is reached in any of the groups
var offsetY_1 = 0
var offsetY_2 = 0
var offsetY_3 = 0

// Used to dynamically position the sticky notes in all three groups
var x_cord_1 = -400;
var y_cord_1 = 0;

var x_cord_2 = 0;
var y_cord_2 = 0;

var x_cord_3 = 400;
var y_cord_3 = 0;

data.notes.forEach((note, index) => {
    if(note.group === 'one') {
        // Increment sticky note count in group one
        item_count_grp_1++

        if(item_count_grp_1 % 2 === 0) {
            // Increment Y offset and add update x and y positions
            offsetY_1++
            x_cord_1 = -400;
            y_cord_1 = 150 * offsetY_1;

        const options = {
            method: 'POST',
            url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            },
            data: {
              data: note.data,
              style: note.style,
              position: {origin: 'center', x: x_cord_1, y: y_cord_1},
              geometry: {height: 150}
            }
          };
          
          axios.request(options).then(function(response) {                                
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });   
          
          // Move to the right
          x_cord_1 = x_cord_1 + 150
        } else {
            const options = {
                method: 'POST',
                url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                },
                data: {
                  data: note.data,
                  style: note.style,
                  position: {origin: 'center', x: x_cord_1, y: y_cord_1},
                  geometry: {height: 150}
                }
            };
              
            axios.request(options).then(function (response) {                        
              console.log('hi');
            }).catch(function (error) {
              console.error(error);
            });   
            
            // Move to the right
            x_cord_1 = x_cord_1 + 150
        }

    } else if (note.group === 'two') {
        item_count_grp_2++

        if(item_count_grp_2 % 2 === 0) {
            // Increment Y offset for group two and  update x and y positions
            offsetY_2++
            x_cord_2 = 0;
            y_cord_2 = 150 * offsetY_2;

            const options = {
              method: 'POST',
              url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
              },
              data: {
                data: note.data,
                style: note.style,
                position: {origin: 'center', x: x_cord_2, y: y_cord_2},
                geometry: {height: 150}
              }
            };
          
            axios.request(options).then(function (response) {                    
              console.log(response.data);            
            }).catch(function (error) {
              console.error(error);
            });   
          
            x_cord_2 = x_cord_2 + 150
        } else {
            const options = {
                method: 'POST',
                url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                },
                data: {
                  data: note.data,
                  style: note.style,
                  position: {origin: 'center', x: x_cord_2, y: y_cord_2},
                  geometry: {height: 150}
                }
              };
              
              axios.request(options).then(function (response) {                        
                console.log(response.data);
              }).catch(function (error) {
                console.error(error);
              });   
              
              // Move group two stricky note item to the right
              x_cord_2 = x_cord_2 + 150
        }

    } else {
        item_count_grp_3++

        if(item_count_grp_3 % 2 === 0) {
            // Increment Y offset for group three and update x and y positions
            offsetY_3++
            x_cord_3 = 400;
            y_cord_3 = 150 * offsetY_3;

          const options = {
            method: 'POST',
            url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            },
            data: {
              data: note.data,
              style: note.style,
              position: {origin: 'center', x: x_cord_3, y: y_cord_3},
              geometry: {height: 150}
            }
          };
          
          axios.request(options).then(function (response) {                    
            console.log(response.data);            
          }).catch(function (error) {
            console.error(error);
          });   
          
          x_cord_3 = x_cord_3 + 150
        } else {
            const options = {
                method: 'POST',
                url: 'https://api.miro.com/v2/boards/uXjVOHHq3zg=/sticky_notes',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                },
                data: {
                  data: note.data,
                  style: note.style,
                  position: {origin: 'center', x: x_cord_3, y: y_cord_3},
                  geometry: {height: 150}
                }
              };
              
              axios.request(options).then(function (response) {                        
                console.log(response.data);
              }).catch(function (error) {
                console.error(error);
              });   
              
              x_cord_3 = x_cord_3 + 150
        }
    }
})

