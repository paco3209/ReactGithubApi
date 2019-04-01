import React from 'react'
import PropTypes from 'prop-types'
import UserData from './UserData'
import UserDataFollowing from './UserDataFollowing'
import UserDataRepo from './UserDataRepo'

class User extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      data:'',
      following: false,
      follower: false,
      repo: false
    }
  }

getUserFollowers(e, data){

  this.setState({
    data: data,
    follower: true,
    following: false,
    repo: false
  })
}

getUserFollowing(e, data){

  this.setState({
    data: data,
    follower: false,
    following: true,
    repo: false
  })
}

getUserRepo(e, data){

  this.setState({
    data: data,
    follower: false,
    following: false,
    repo: true
  })
}



  render () {
    let user_data = ''
    if (this.state.data) {
          if(this.state.follower){
            user_data = <UserData data={this.state.data}/>
          }else if (this.state.following) {
            user_data = <UserDataFollowing data={this.state.data}/>
          }else if (this.state.repo) {
            user_data = <UserDataRepo data={this.state.data}/>
          }

        }
    return(

    <div className="row">
        <div className="col">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140"  src={this.props.user.avatar_url} />
          <h2>{this.props.user.name}</h2>
          <p>{this.props.user.bio}</p>
          <p>De: {this.props.user.location}</p>
          <p><a className="btn btn-secondary" href={this.props.user.html_url} role="button">Github Repo</a></p>
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
      <li className="nav-item">
        <a class="nav-link active" id="siguea" data-toggle="tab" href="#" onClick={(event) => this.getUserFollowers(event, this.props.user.followers_url)} role="tab" aria-controls="siguea" aria-selected="true">Siguen {this.props.user.followers}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="seguidopor" data-toggle="tab" href="#" onClick={(event) => this.getUserFollowing(event, `https://api.github.com/users/${this.props.user.login}/following`  )} role="tab" aria-controls="seguidopor" aria-selected="false">Seguido por {this.props.user.following} </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="repositorio" data-toggle="tab" href="#" onClick={(event) => this.getUserRepo(event, this.props.user.repos_url  )} role="tab" aria-controls="repositorio" aria-selected="false">Repositorios {this.props.user.public_repos} </a>
      </li>
    </ul>
{user_data}
          </div>


      </div>
    )

  }
}

export default User;
