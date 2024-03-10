export default function EditPost() {
    function handleSubmit(e) {
    //Prevent browser from reloading page
    e.preventDefault();
    
    //Read the form data
    const form=e.target;
    const formDataa = new FormData(form)
    
    // pass formData directly as a fetch body
    fetch('/insert-api', { method: form.method, body: formData});

    // or work with it as a plain object
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); 
    }

    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Post title: <input name="postTitle" defaultValue="Biking"
        </label>
        <label>
          Edit your post:
          <textarea
            name="postContent"
            defaultValue="I really enjoyed biking yesterday"
            rows={4}
            cols={40}
           /> 
         </label>
         <hr />
         <button type="reset">Resset edits</button>
         <button type="submit">Save Post</button>
       </form>
  );
}