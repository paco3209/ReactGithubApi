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
    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
    <li className="nav-item"
    onClick={(event) => this.getUserFollowers(event, this.props.user.followers_url)}
    >
      <p>Siguen</p>
      <b>{this.props.user.followers}</b>

    </li>
    <li className="nav-item"
    onClick={(event) => this.getUserFollowing(event, `https://api.github.com/users/${this.props.user.login}/following`  )}
    >
      <p>Seguido por</p>
      <b>{this.props.user.following}</b>

    </li>
    <li className="nav-item"
    onClick={(event) => this.getUserRepo(event, this.props.user.repos_url  )}
    >
      <p>Repositorios</p>
      <b>{this.props.user.public_repos}</b>

    </li>
  </ul>
{user_data}
          </div>


      </div>
    )

  }
}

export default User;
