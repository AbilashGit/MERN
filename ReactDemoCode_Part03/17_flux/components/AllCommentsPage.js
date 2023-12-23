import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentStore from '../stores/CommentStore';
import InitializeActions from '../actions/InitializeActions';

export default class AllCommentsPage extends React.Component {
    constructor(props) {
      super(props);
      this._onChange = this._onChange.bind(this);

// F1:
      this.state = {
        comments: CommentStore.getAllComments()
      }

    }

    componentDidMount() {
        CommentStore.addChangeListener(this._onChange);
        InitializeActions.initComments(); 
    }

    componentWillUnmount() {
        CommentStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({ comments: CommentStore.getAllComments() });
    }

    render() {
        return (
            <div>
                <h1>Comments - Using Flux</h1>
                <CommentList comments={this.state.comments} />
                <br/>
                <Link to="/addComment">Add Comment</Link>
            </div>
        );
    }
}
