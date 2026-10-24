
import "./Header.css";
import { FaPhone, FaMapMarkerAlt, FaGlobe, FaEnvelope } from 'react-icons/fa';
function Header({ name, title, contact }) {
  
  return (
    <header className="header">
      <h1>{name}</h1>
      <h2> <strong>{title}</strong></h2>

      <p>
        <span><FaPhone/>{contact.phone}</span>
        <span><FaMapMarkerAlt/>{contact.location}</span>
        <span><FaGlobe/>{contact.email}</span>
        <span><FaEnvelope/>{contact.website}</span>
      </p>
    </header>
  );
}
export default Header;
