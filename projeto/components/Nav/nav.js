import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <h1>Nav</h1>
      <ul>
        <li>
          <Link href='/posts/first-post'>
            <a>My first post!</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Second</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Third</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Fourth</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
