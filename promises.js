//https://jsonplaceholder.typicode.com/

    const fetchData= async()=>{
        let data = await fetch("https://jsonplaceholder.typicode.com/").then((response)=>response.json()).then((res) => res)
        console.log("Data>>>",data)
        data.forEach((item,index) =>{
            document.getElementById("container").innerHTML +=`<div class =>"card"
            <div class="card-header"> 
            <h3>Task Title</h3>
            <div>
            <div class="card-body">
            <p> <strong>User ID:</strong><span id="userId">${item.userId}</span></p>
            <p><strong>Title:</strong><span id="title">${item.title}</span></p>
            <p><strong>Completed:</strong><span id="completed">${item.completed ? 'YES':'NO'}</span></p>
            </div>
            </div>`
            });
    }

    fetchData()

    function myPromise()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            let condition= Math.random()>0.5
            if(condition){
                resolve("data fetched")
            }
            else{
                reject("failed to fetch data")
            }
        },2000)
    })





}
      let elem=document.getElementById("fetchDataBtn")
      elem.addEventListener("click",async()=>{
        
            displayOutput(`Loading.....`)
            elem.style.display = "none"
         await myPromise().then((res) => {
            displayOutput(`Success:${res}`)
          }).catch((err)=>{
            displayOutput(`failure:${err}`)
          })
          elem.style.display = "block"
          console.log(">>>>>>>>>>>>>")

    })

    
    
    function displayOutput(message){
        document.getElementById("Output").innerHTML+=`<p>${message}</p>`

    }
    
    
