const Contact = ({}) => {
  return (
    <>
      <section className="contact-area" id="contact">
        <div className="container contact">
          <div className="row" data-aos="fade-down">
            <div className="col-lg-12 text-center contact-title">
              <h4 className="text-uppercase">Feel Free to Contact Me !</h4>
            </div>
          </div>
          <br />
          <div
            className="d-sm-flex justify-content-center"
            data-aos="fade-down"
          >
            <div className="col-lg-12 text-center contact-title">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:taufikjanuar35@gmail.com"
              >
                <button type="button" className="btn button primary-button">
                  Email:
                  <br />
                  taufikjanuar35@gmail.com
                </button>
              </a>
              <a href="#">
                <button type="button" className="btn button secondary-button">
                  Phone Number:
                  <br />
                  +6285314329936
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
