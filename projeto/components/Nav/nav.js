import Link from 'next/link';

function Nav() {
  return (
    <>
      <nav className='navbar mb-2 shadow-lg bg-neutral text-neutral-content'>
        <div className='flex-none px-2 mx-2'>
          <span className='text-lg font-bold'>daisyUI</span>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='items-stretch hidden lg:flex'>
            <a className='btn btn-ghost btn-sm rounded-btn'>Home</a>
            <a className='btn btn-ghost btn-sm rounded-btn'>About (section)</a>
            <a className='btn btn-ghost btn-sm rounded-btn'>Projects (page)</a>
            <a className='btn btn-ghost btn-sm rounded-btn'>
              Contact (section)
            </a>
          </div>
        </div>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </>

    // <nav>
    //   <h1>Nav</h1>
    //   <ul>
    //     <li>
    //       <Link href='/posts/first-post'>
    //         <a>My first post!</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href='#'>
    //         <a>Second</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href='#'>
    //         <a>Third</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href='#'>
    //         <a>Fourth</a>
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Nav;
