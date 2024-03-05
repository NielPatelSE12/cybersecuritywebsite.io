// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-400 p-4">
      <ul className="flex justify-end space-x-4">
        <li>
          <Link href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
