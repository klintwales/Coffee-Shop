import React, {useState} from 'react';



function Shop(){

  const [dog, findDog] = useState();



  function getDog(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.send();
    request.onload = () => {
      console.log(request);
      if(request.status === 200){
        console.log(JSON.parse(request.response));
        findDog(JSON.parse(request.response));
      }else{
        console.log("error " + request.status + request.statusText);
      }
    }
  }

  function returnedDog(){
    if(dog != null){
      return(
        <div>
        <img src={dog.message} style={{height:"20rem", display:"block", margin:"auto"}}></img>
        </div>
      );
    }
  }

  function hello(){
    console.log("Hello");
  }

  return(
    <div className="col-md-4">
    <div className="card mb-4 rounded-3 shadow-sm" style={{padding:"0px", margin:"0px", height:"50rem"}}>
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">API</h4>
      </div>
      <div className="card-body">
      <h1 className="card-title pricing-card-title">$API</h1>
      {returnedDog()}
      <br/>
      <button class="w-100 btn btn-lg btn-primary" onClick={() => getDog()}>Click to see a new dog</button>
      </div>
    </div>
    </div>
  )
};

export default Shop;
