import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
    <div className="container">
      <form className="form-signin">

          <label for="inputUsername" className="sr-only">Username</label>
            <input type="username" id="inputUsername" className="form-control" placeholder="Username" required="" autofocus="" />
          <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
      </div>
    );
  }
}

export default Homepage;
