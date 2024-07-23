import react from 'react';

type headerProps = {
  content: string;
}

function Header(props: headerProps) {
  return (
    <header className="header">
      <h1 className="heading">
        {props.title}
      </h1>
    </header>
  );
}

export {Header};
