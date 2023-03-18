function Button({ children, message }) {
  return <button onClick={message}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayMovie() {
    alert(`${movieName} is playing`);
  }

  return <Button message={handlePlayMovie}>Play "{movieName}"</Button>;
}

export default function EventHandlers() {
  return (
    <div>
      <PlayButton movieName="terubaba" />
    </div>
  );
}
