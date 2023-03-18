export default function Signup() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting");
        }}
      >
        <input></input>
        <button>Send</button>
      </form>
    </div>
  );
}
