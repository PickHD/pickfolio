const Project = ({}) => {
  return (
    <>
      <section className="project-area" id="project">
        <div className="container">
          <div className="project-title pb-5" data-aos="fade-up">
            <h1 className="text-uppercase text-center title-h1">
              Recently Done Projects
            </h1>
          </div>
          <div className="button-group" data-aos="fade-down">
            <button type="button" className="active">
              All
            </button>
            <button type="button" data-filter=".latest">
              Latest
            </button>
            <button type="button" data-filter=".upcoming">
              Upcoming
            </button>
          </div>
          <div className="row grid">
            <div
              className="col-lg-4 col-md-6 col-sm-12 element-item upcoming"
              data-aos="fade-down"
            >
              <div className="my-project">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://github.com/PickHD?tab=repositories"
                  >
                    <img src="/git.png" className="img-fluid" alt="git" />
                  </a>
                </div>
                <div className="title py-4">
                  <h5>
                    <a
                      target="_blank"
                      href="https://github.com/PickHD?tab=repositories"
                    >
                      <span className="text-secondary">
                        Check My git account for details
                      </span>
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
