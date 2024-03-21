export default function NewPost() {
    const postTextAreaId = useID();
    return (
        <>
        <label htmlFor={postTextAreaId}>
          Write your post:
          <textarea name="postContent" rows={4} cols={40} />
        </label>
        <textarea
          id={postTextAreaId}
          name="postContent"
          rows={4}
          cols={40}
          />
        </>
      );
  }