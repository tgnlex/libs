import {useState} from 'react';

const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
  }, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
  }, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
  }];
  
function Letter({
    letter, 
    isHighlighted, 
    onHover, 
    onToggleStar,
    onDelete,
}) {
  return (
    <li
      className={
        isHighlighted ? 'highlighted' : ''
      }
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button onClick={() => {
        onToggleStar(letter.id);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
      <button onClick={onDelete}>x</button>
    </li>
  )
}

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highLightedId, setHighlightedId ] = useState(null);

    function handleHover(letterId) {
      setHighlightedId(letterId);
    }
    function handleDelete(letterId) {
      
    }
    function handleStar(starredId) {
      setLetters(letter.map(letter => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }  
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
            <Letter
              key={letter.id}
              letter={letter}
              isHighlighted={
                letter.id === highlightedId
            }
              onHover={handleHover}
              onToggleStar={handleStar}
              onDelete={handleDelete}
            />
        ))}
      </ul>
    </>
  );
}