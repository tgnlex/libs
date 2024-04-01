// How to implement 

/* 
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing')}
      onUploadImage={() => alert('Uploading')}
    />
  );
}

*/

export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
    )
}

export function Button({ onClick, children}) {
  return(
    <button onClick={onClick}>
      {children}
    </button>
    );
}