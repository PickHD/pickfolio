const Footer = () => {
  const timeNow = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div>
            <div className="site-logo text-center py-4" data-aos="fade-up">
              <h3>Follow Me On :</h3>
            </div>
            <div className="social text-center" data-aos="fade-up">
              <a
                target="_blank"
                href="https://github.com/PickHD"
                rel="noreferrer"
                data-aos="fade-down"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/taufik-januar-777141193/"
                rel="noreferrer"
                data-aos="fade-down"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/taufikjanuarr/?hl=id"
                rel="noreferrer"
                data-aos="fade-down"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                href="https://hub.docker.com/u/pickezdocker"
                rel="noreferrer"
                data-aos="fade-down"
              >
                <i className="fab fa-docker"></i>
              </a>
            </div>
            <div className="copyright text-center">
              <p className="para">
                &copy; Copyright {timeNow} <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
