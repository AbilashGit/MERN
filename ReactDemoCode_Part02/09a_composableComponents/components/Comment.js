import React from 'react';

const Comment = ({author, children}) => (
  <tr>
    <td>{author}</td>
    <td>{children}</td>
  </tr>
);

export default Comment;