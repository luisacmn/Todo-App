function Header() {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <h1 className="title me-auto">ToDo</h1>
        <p className="year ms-auto">{new Date().getFullYear()}</p>
      </div>
    </nav>
  );
}

export default Header;
