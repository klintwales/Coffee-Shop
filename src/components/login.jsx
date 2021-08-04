import React from 'react';

function Login(){
  return(
    <row>
<article class="card-body">
<h4 class="card-title mb-4 mt-1">Log in</h4>
<form>
    <div class="form-group">
    	<label>Your email</label>
        <input name="" class="form-control" placeholder="Email" type="email"/>
    </div>
    <div class="form-group">
    	<a class="float-right" href="#">Forgot?</a>
    	<label>Your password</label>
        <input class="form-control" placeholder="******" type="password"/>
    </div>
    <div class="form-group">
      <div class="checkbox">
        <label> <input type="checkbox"/> Save password </label>
      </div>
    </div>
      <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block"> Login  </button>
        <a href="" class="float-right btn btn-outline-primary">Sign up</a>
      </div>

</form>
</article>
</row>
)};

export default Login;
