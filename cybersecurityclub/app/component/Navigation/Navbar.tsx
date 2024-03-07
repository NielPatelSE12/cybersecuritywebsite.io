// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-300 py-4 px-6"> {/* Reduced padding */}
      <ul className="flex justify-end space-x-4 text-sm"> {/* Reduced font size */}
        <li>
          <Link href="/home">
            Goals
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
