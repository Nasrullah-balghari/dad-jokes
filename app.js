const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("button");
// GET https://icanhazdadjoke.com/
// fetch data by promises
// const generateJoke = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }


//     fetch('https://icanhazdadjoke.com', setHeader)
//         .then((res) => res.json())
//         .then((data)=>{
//             joke.innerHTML = data.joke;
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }

// fetch data from API by asyn await
//  async function ()
const generateJoke = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json()
        joke.innerHTML = data.joke;
    }catch(error){
        console.log(`the error is ${error}`)
    }
    }



jokeBtn.addEventListener('click', generateJoke);
generateJoke();