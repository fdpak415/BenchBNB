import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      bench_id: this.props.benchId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
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
            man="5"
            value={this.state.rating}
            onChange={this.update('rating')}></input>

          <br></br><br></br>

          <input type="submit" value="Submit Review"></input>
        </form>
      </div>
    )
  }
}

export default ReviewForm;
