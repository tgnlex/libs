
export default function Form({ status = 'empty'}) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing')
  if (status === 'success') {
    return <h1>Correct</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }
  return (
   <>
   <h2>Question Form</h2>
   <p>
     If this were a test which answer would you want to pick?
     <form onSubmit={handleSubmit}>
       <textarea 
         value={answer}
         onChange={handleTextareaChange}
         disabled={status === 'submitting'}
        />
       <br />
       <button disabled={
         answer.length === 0 ||
         status === 'submitting'
       }>
         Submit
       </button>
       {error !== null &&
         <p className="Error">
           {error.message}
         </p>
       }
     </form>
   </p>
   </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase()
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer'))
      } else {
        resolve();
      }
    }, 1500);
  });
}