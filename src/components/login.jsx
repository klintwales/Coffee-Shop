import React from 'react';

function Login(){
  return(
<article class="card-body">
  <h4 class="card-title mb-4 mt-1" style={{textAlign:"center"}}>Log in</h4>
    <div class="container col-4">
      <div class="row mb-4 mx-auto">
        <form>
            <div class="form-group">
            	<label>Your email</label>
                <input name="" class="form-control" placeholder="Email" type="email"/>
            </div>
            <br/>
            <div class="form-group">
            	<label>Your password</label>
                <input class="form-control" placeholder="******" type="password"/>
                <a class="float-right" href="#">Forgot your password</a>
            </div>
            <br/>
            <div class="form-group">
              <div class="checkbox">
                <label> <input type="checkbox"/> Save password </label>
              </div>
            </div>
              <div class="container form-group">
                <div class="row align-content-center mx-auto d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary btn-block col-4 align-self-center d-flex justify-content-center" style={{marginRight:"1%"}}> Login  </button>
                <a href="" class="float-right btn btn-outline-primary col-4 align-self-center d-flex justify-content-center" style={{marginLeft:"1%"}}>Sign up</a>
                </div>
              </div>
        </form>
      </div>
    </div>
</article>

)};

export default Login;
