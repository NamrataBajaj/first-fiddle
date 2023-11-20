function Navbar() {
  return (
    <>
      <section className="bg-black text-white">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a href="this" className="navbar-brand">
              <img src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75" width="40px" height="40px" alt="33" className="until img-fluid">
              </img>
            </a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#pn">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="pn">
              <ul className="navbar-nav ms-auto">
                <li><a href="/Home" className="nav-link text-white">HOME</a></li>
                <li><a href="/Contact" className="nav-link smooth_scroll text-white">ABOUT</a></li>
                <li><a href="/Brand" className="nav-link text-white">BRAND</a></li>
                <li><a href="/Press" className="nav-link text-white">PRESS RELEASE</a></li>
                <li><a href="/Details" className="nav-link text-white">CONTACT US</a></li>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#aa">
                  Login
                </button>

              </ul>
            </div>

          </div>
        </nav>

      </section>
    </>
  )
}
export default Navbar;