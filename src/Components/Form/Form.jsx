import { useState } from "react";
import './Form.css'

export default function Form({ addComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (name.length < 4) {
      setError("Довжина імені має бути не менше 4 символів");
      return;
    }

    if (comment.length < 10) {
      setError("Довжина повідомлення має бути не менше 10 символів");
      return;
    }

    addComment(name, comment);
    setName('');
    setComment('');
  };

  return (
    <form id="comments-form" autoComplete="off" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Введіть ваше ім'я" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea 
        name="comment" 
        placeholder="Введіть повідомлення" 
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {error && <div id="error">{error}</div>}
      <button type="submit">Відправити</button>
    </form>
  );
}
