import React from 'react';
import {withRouter} from 'react-router';

class BenchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      seating: '',
      lat: props.lat,
      lng: props.lng,
      image_url: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this._navigateToSearch = this._navigateToSearch.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const bench = Object.assign({}, this.state)
    this.props.createBench({bench});
    this._navigateToSearch();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
    debugger;
  }

  _navigateToSearch() {
    this.props.router.push("/")
  }

  render() {
    const {description, seating, lat, lng, image_url} = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Description</label>
          <br></br>
          <textarea
            placeholder='Description Here'
            value={description}
            onChange={this.update("description")}>
            Description</textarea>

          <br></br><br></br>

          <label>Seating</label>
          <br></br>
          <input
            type="number"
            value={seating}
            onChange={this.update('seating')}
            placeholder="Seating"/>

          <br></br><br></br>

          <label>Latitude</label>
          <br></br>
          <input
            type="text"
            disabled
            value={lat}
            onChange={this.update('lat')}
            placeholder="Latitude"/>

          <br></br><br></br>

          <label>Longitude</label>
          <br></br>
          <input
            type="text"
            disabled value={lng}
            onChange={this.update('lng')}
            placeholder="Longitude"/>

          <br></br><br></br>

          <label>Image Url</label>
          <br></br>
          <input
            type="text"
            onChange={this.update('image_url')}
            value={image_url}/>

          <input type="submit" value="Create Bench"/>

        </form>
      </div>
    )
  }
}

export default withRouter(BenchForm);
