import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <header>
      <h1>Which Element are you?</h1>
    </header>
    <h2>(Based on completely random things)</h2>
    <Link to="/home">Home</Link>
    <Link to="/quiz">Quiz</Link>
    </div>
  );
}

export default Header;

