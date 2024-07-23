




function Error(props: ErrorProps) {
  return (
    <>
      <h2 style={{color: black, border: 2px 'solid' red}}>
        Error: {props.code}
      </h2>
      <p>{props.message}</p>
    </>
  )
}

export default Error;
