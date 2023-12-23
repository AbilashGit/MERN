import React from 'react';
import  {withRouter} from 'react-router-dom';

import CommentForm from './CommentForm';
import CommentApi from './data/CommentApi';

// Container Component
class AddCommentPage extends React.Component {
    constructor(props) {
      super(props);
      this.saveComment = this.saveComment.bind(this);
    }

    saveComment(comment) {
        CommentApi.saveComment(comment);
        this.props.history.push('/');
    }

    render() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
}

// HOC - Higher Order Component
export default withRouter(AddCommentPage);
