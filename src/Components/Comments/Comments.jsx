import { useState } from 'react';
import './Comments.css';

function Comments({ comments, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [newCommentText, setNewCommentText] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewCommentText(comments[index].comment);
  };

  const handleSaveEdit = () => {
    if (newCommentText) {
      onEdit(editIndex, newCommentText);
      setEditIndex(null);
      setNewCommentText("");
    }
  };

  return (
    <section className='comments'>
      <h3 className='comments-header'>
        Коментарі (<span className="count-comm">{comments.length}</span>)
      </h3>
      <div id="comments">
        {comments.length === 0 ? (
          <div className="empty">Поки коментарів немає</div>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <div className="actions">
                <i 
                  className="fas fa-edit edit-icon" 
                  onClick={() => handleEditClick(index)}
                />
                <i 
                  className="fas fa-trash delete-icon" 
                  onClick={() => onDelete(index)}
                />
              </div>
              <strong className="name">{comment.name}</strong>
              <p className="mess">{comment.comment}</p>
              {editIndex === index && (
                <div className="edit-form">
                  <textarea 
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    rows="3"
                  />
                  <button 
                    className="save-edit-button" 
                    onClick={handleSaveEdit}
                  >
                    Зберегти
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Comments;
