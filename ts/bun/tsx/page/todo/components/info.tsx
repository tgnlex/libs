import Loading from '../../component/loading.tsx';

const TodoInfo = ({}) => {
  return (
    <span className="info-text">
      {loading 
        ? <Loading />
        : <h4>Nothing to show! Add some new tasks!</h4>
      }
    </span>
  )
}
