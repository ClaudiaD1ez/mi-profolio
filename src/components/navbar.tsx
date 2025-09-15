import { dataRRSS } from "@/src/data";
import Link from "next/link";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {dataRRSS.map((item) => (
          <div key={item.id} className="navbar-item">
            <Link href={item.link || "#"} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.name} className="navbar-icon" />
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;