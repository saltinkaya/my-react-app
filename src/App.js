function Navbar() {
  return (
    <nav className="navigation">
      <img src="/Users/saltin/Desktop/Coding/react-projects/my-app/images/logo.png" alt="clasital-logo" />
      <form>
        <select name="courses" id="courseSelect">
          <option value="IELTS Academic">IELTS Academic</option>
          <option value="IELTS General">IELTS General</option>
        </select>
      </form>
      <ul className="tabs">
        <li>
          <img src="https://placehold.co/16x16" alt="classroom" />
          <span className="span-text">Classroom</span>
        </li>
        <li>
          <img src="https://placehold.co/16x16" alt="classroom" />
          <span className="span-text">Library</span>
        </li>
        <li>
          <img src="https://placehold.co/16x16" alt="classroom" />
          <span className="span-text">Calendar</span>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return <Navbar />;
}
