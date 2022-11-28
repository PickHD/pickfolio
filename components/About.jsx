const About = ({}) => {
  const myAge = new Date().getFullYear() - 2002;

  return (
    <>
      <section className="about-area" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 about-title" data-aos="fade-up">
              <h2 className="text-uppercase">
                <span>Let Me</span> <span>Introduce</span> <span>Myself</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  Hello! My Name is Taufik Januar Rachman, age {myAge}
                  <b> Vocaltional Highschool 13 Bandung alumni</b> majoring in
                  <b>
                    <i> software engineering</i>
                  </b>
                  . I Live in Bandung , Jawa Barat Indonesia. Now I'm working as{" "}
                  <b>Backend Developer</b>.
                </p>
                <p className="para">
                  I like <b>programming</b> since i'm 2th grade of Vocaltional
                  School,but that is not enough for me and now i improve my
                  skill more and more. I usually using <b> Golang </b> and
                  exploring some back-end things like <b>Microservices</b>,
                  <b>RESTFul API's</b> , <b>GraphQL</b>,
                  <b>Database, Git, Docker</b>, etc. Moreover i like a
                  challenges & learning a new things.
                </p>
              </div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1FcB__7O48auNkLg47_Do0PHrYRM1xXZ5/view?usp=sharing"
              >
                <button
                  type="button"
                  className="btn button primary-button text-uppercase"
                >
                  Download CV
                </button>
              </a>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="fade-down">
              <div className="about-image">
                <img src="/about-me.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
