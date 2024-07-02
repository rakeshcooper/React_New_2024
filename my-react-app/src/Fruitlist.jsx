
function Fruitlist(){
    const fruits = ["apple", "mango", "pineapple","bananna","gauva"];

   const listFruit = fruits.map((fruit,index) => <li key={index}>{fruit}{index}</li>)
   console.log(listFruit);
    return(<ul>{listFruit}</ul>)
}

export default Fruitlist
