import Image from "next/image";

const Banner = ({}) => {
  return (
    <>
      <section className="site-banner" data-aos="fade-down" duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 banner-image">
              <Image src="/header-img.png" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text">Hello!</h3>
              <h1 className="title-text text-uppercase">I&apos;m Taufik</h1>
              <h4 className="title-text text-uppercase">Backend Developer</h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <a href="#about">
                    <button
                      type="button"
                      className="btn button primary-button mr-4 text-uppercase"
                    >
                      Get In Touch
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/14P7SOFk-17aYEjR8x267Z4uEamVqD2xR/view?usp=sharing"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="btn button secondary-button text-uppercase"
                    >
                      Get CV Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
