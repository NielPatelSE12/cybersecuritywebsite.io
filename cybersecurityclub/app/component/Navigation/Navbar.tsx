import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-300 py-4 px-6 flex justify-between items-center"> {/* Align items to the center */}
      {/* Logo */}
      <div>
        <img src='/cyber security logo.jpg' alt="Logo" className="h-24" /> {/* Adjust height as needed */}
      </div>

      {/* Title */}
      <div className="text-center"> {/* Center content */}
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" style={{ border: '2px solid white', padding: '10px' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">FGCU Cyber</span> 
          <span className="text-emerald-600 dark:text-blue-500">Security Club</span> {/* Apply the same text color here */}
        </h1>
      </div>

      {/* Navigation links */}
      <ul className="flex justify-end space-x-4 text-sm">
        <li>
          <Link href="/">
            <button className="btn">Home</button>
          </Link> 
        </li>
        <li>
          <Link href="/goals">
            <button className="btn">Goals</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className="btn">About Us</button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <button className="btn">Contact</button>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <button className="btn">Projects</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
