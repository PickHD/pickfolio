import Image from "next/image";

const Skill = ({}) => {
  return (
    <>
      <section className="skills-area" id="skills">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 text-center skills title"
              data-aos="fade-up"
            >
              <h1 className="text-uppercase title-text">Core Skills</h1>
            </div>
          </div>
          <div className="container skills-list">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-down">
                <div className="mySkill">
                  <div className="skill-img text-center py-4">
                    <Image
                      src="/cache.svg"
                      className="img-fluid"
                      alt="Computer"
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-uppercase font roboto">
                    Architect Monolith API
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 " data-aos="fade-down">
                <div className="mySkill">
                  <div className="skill-img text-center py-4">
                    <Image
                      src="/database.svg"
                      className="img-fluid"
                      alt="Computer"
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-uppercase font roboto">
                    Architect Database SQL
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 " data-aos="fade-down">
                <div className="mySkill">
                  <div className="skill-img text-center py-4">
                    <Image
                      src="/api.svg"
                      className="img-fluid"
                      alt="Computer"
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title text-uppercase font roboto">
                    Architect Microservices API
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
