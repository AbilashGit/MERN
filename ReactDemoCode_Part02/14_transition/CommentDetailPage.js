import React from 'react';
import {withRouter, Prompt} from 'react-router-dom';
let authenticated=false;
class CommentDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: false
    };
    this.authenticate(props.history);
  }
 
  authenticate(history) {
    if (!authenticated) {
      alert("Not authenticated, hence redirecting back...");
      history.replace('/');
    }
  }

  setModified() {
    this.setState({modified: true})
  }

  render() {
    return (
      <div>
        <label>ID: </label>
        <input type="text" defaultValue={this.props.match.params.id} onInput={() => this.setModified()}/>
        <Prompt when={this.state.modified} message="Are you sure you want to leave ?" />
      </div>
    );
  }
}

export default withRouter(CommentDetail);
