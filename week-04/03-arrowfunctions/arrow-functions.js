/*//examples of arrow functions

//traditional function
function add(a,b) {
    return a + b ;
}

//arrow function

const add = (a,b) => {
    return a + b ;
};

const add = (a,b) => a + b ;

//====================================

//traditional function
function greet(username){
    console.log( `Welcome ${username}`);}

    //arrow function
    //when there is one parameter only, you can omit the regular brackets

    //const greet = username => console.log(`Welcome ${username} );

    //===========================================
const array = [1, 2, 3];
array.forEach(fucntion (item){
    console.log(item);
});
///arrow funciton
array.forEach(item => {
    console.log(item);
});
*/
//=======================================================================================
/*

//TODO: make the below function as effiecnt as possible 
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//const getPosts = async () =>
 // (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

async function loadUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return user;
};

//const loadUser = async (id) => (await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)).json(); //

console.log(loadUser(1));

*/

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


const materials => 