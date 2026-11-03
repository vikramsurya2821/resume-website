import "./Header.css";
function Header({ name, title, contact }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>
        <span>{contact.location}</span>
        <span className="sep">|</span>
        <span>{contact.phone}</span>
        <span className="sep">|</span>
        <span>{contact.email}</span>
        <span className="sep">|</span>
        <a href={`https://${contact.website}`} target="_blank" rel="noreferrer">{contact.website}</a>
      </p>
    </header>
  );
}
export default Header;
