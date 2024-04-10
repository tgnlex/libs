import {useState, useRef, useEffect} from 'react';

export function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()')
      ref.current.pause();
    }
  }, [isPlaying]); // anything declared in our if statement above
                   // must be called inside this array
  return <video ref={ref} src={src} loop playsInline
}
// How to implement this component 

/*
export default function App() {
  const [isPlaying setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
      />
    </>
  )
}
 

*/