
// let dataN;

// console.log("working")
// fetch('https://localhost:44342/api/Login').
// then(res => res.json()).
    
// then(data => {
//  console.log(data)
//    let dataN = JSON.stringify(data)
//     console.log(dataN)
//     let username = dataN['Username']
//     console.log(username)
  
 
// }).
// catch(error => console.log(error)) ;

// console.log(dataN)


async function getuser(){
    let response=await fetch('https://localhost:44342/api/Login');
    let data = await response.json();
    return data;
}



let username, password;
getuser().then(response =>{
   username = response[0]['Username']
   password = response[0]['pass']
   


    
  
})
signin.addEventListener('click',()=>
{
    let lusername = (document.getElementById('Sign').value).toString()
let lpassword = (document.getElementById('Pass').value).toString()
    // console.log(lusername, lpassword)
    // console.log('working', username, password)
    if(username==lusername && password==lpassword)
    {
        window.location.href = './userAdmin/UserDashboard.html'
    }
    else
    {
        alert('Username or Password is Incorrect')
    }

    var name = btoa(lusername);
    localStorage.setItem('_name', name);
    // document.querySelector('.user-welcome').innerHTML=lusername
    // export{lusername as us}
})

