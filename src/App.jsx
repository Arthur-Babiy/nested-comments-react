import { useState } from 'react';
import './index.css';
import Form from './Components/Form/Form';
import Comments from './Components/Comments/Comments';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (name, comment) => {
    setComments([...comments, { name, comment }]);
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const editComment = (index, newCommentText) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, comment: newCommentText } : comment
    );
    setComments(updatedComments);
  };

  return (
    <>
      <Form addComment={addComment} />
      <Comments 
        comments={comments} 
        onDelete={deleteComment} 
        onEdit={editComment} 
      />
    </>
  );
}

export default App;
