import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class UserDataRepo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
            loading: true,
            data: [],
            hasMore: true,
            nextDataPage: 2
        }
        this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount() {

          this.setState({
              loading: true
          })
          this.fetchData(this.props.data)
      }

fetchData(url){
  axios.get(url)
    .then(res => {
        this.setState({
        data: res.data,
        loading: false
        })
    });
}



  render () {
    let datos = this.state.data;
    console.log(datos);
    return(
      <div>
          {datos.map(data => (
    <div className="container">
    <div className="row">
        <div className="col">
            <div className="media" key={data.id}>

              <div className="media-body">
                <h4 className="media-heading">{data.description}</h4>
                <a href={data.html_url}>{data.html_url}</a>
              </div>
            </div>
        </div>

    </div>
</div>
          ))}
      </div>
    )
  }
}

export default UserDataRepo;
