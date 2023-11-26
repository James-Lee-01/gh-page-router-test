import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to='/first'>
            <h3>First Page</h3>
          </Link>
          <ul>
            <li>
              <Link to='/first/sub'>
                <h4>First Subpage</h4>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/second'>
            <h3>Second Page</h3>
          </Link>
          <ul>
            <li>
              <Link to='/second/sub'>
                <h4>Second Subpage</h4>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/third'>
            <h3>Third Page</h3>
          </Link>
          <ul>
            <li>
              <Link to='/third/sub'>
                <h4>Third Subpage</h4>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
