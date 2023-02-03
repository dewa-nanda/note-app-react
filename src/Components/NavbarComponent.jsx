import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <header>
      <h1>KETnotes</h1>

      <div className="list-link">
        <Link to="/">Home</Link>
        <Link to="/archived">Archived note</Link>
        <Link to="/addNote">Add Note</Link>
      </div>
    </header>
  );
};

export default NavbarComponent;
