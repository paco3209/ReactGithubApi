import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header'
import User from './components/User'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuario: '',
      loading: false,
      userGithub:{}
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleInput(e){
  e.preventDefault();
  this.setState({[e.target.name]:e.target.value})
}

handleSubmit(e){
  e.preventDefault();
  const user = this.state.usuario
  this.setState({
        loading: true
      })
      axios.get(`http://api.github.com/users/${user}`)
        .then(res => {
          const userGithub = res.data;
          console.log(res.data)
          this.setState({
          userGithub,
          loading:false
         });

  })
  .catch(function(error) {
                
            });


}

  render() {
    const name = this.state.userGithub.login
    let userProfile;
    if( this.state.loading === true)  {
       userProfile =
       <div className="d-flex justify-content-center loader">
           <div className="spinner-grow text-info" role="status">
           <span className="sr-only">Loading...</span>
          </div>
     </div>
    }else if (name) {
        userProfile = <User user={this.state.userGithub} />
    }
    return (
      <div className="App">
        <Header />
          <form className="form-inline my-2 my-lg-0 d-flex justify-content-center formulario" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Usuario"
              aria-label="Search"
              name="usuario"
              value={this.state.usuario}
              onChange={this.handleInput}
               />
            <button
              className="btn btn-outline-info my-2 my-sm-0"
              type="submit"
              onClick={this.handleSubmit}
              >Buscar</button>
          </form>
          {userProfile}
      </div>
    );
  }
}

export default App;
