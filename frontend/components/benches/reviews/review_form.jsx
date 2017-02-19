import React from 'react';
import {withRouter} from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const benchId = parseInt(this.props.params.benchId);
    const review = Object.assign({}, this.state, {
      bench_id: benchId
    });
    this.props.createReview({review});
    this.props.router.push(`/benches/${parseInt(this.props.params.benchId)}`)
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review Comment</label>
          <textarea
            value={this.state.body}
            placeholder="comment here"
            onChange={this.update('body')}></textarea>

          <br></br><br></br>

          <label>Rating</label>
          <input
            type="number"
            min="0"
            max="5"
            value={this.state.rating}
            onChange={this.update('rating')}></input>

          <br></br><br></br>

          <input type="submit" value="Submit Review"></input>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
