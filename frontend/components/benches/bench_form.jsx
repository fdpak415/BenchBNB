import React from 'react';
import {withRouter} from 'react-router';

class BenchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      seating: '',
      lat: props.lat,
      lng: props.lng
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
  }

  _navigateToSearch() {
    this.props.router.push("/")
  }

  render() {
    const {description, seating, lat, lng} = this.state;
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

          <input type="submit" value="Create Bench"/>

        </form>
      </div>
    )
  }
}

export default withRouter(BenchForm);
