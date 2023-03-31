import Image from "next/image";

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
                  <b> Vocational Highschool 13 Bandung alumni</b> majoring in
                  <b>
                    <i> software engineering</i>
                  </b>
                  . I Live in Bandung , West Java Indonesia. Now I&apos;m
                  working as <b>Backend Developer</b>.
                </p>
                <p className="para">
                  I like <b>programming</b> since i&apos;m 2th grade of
                  Vocational School,but that is not enough for me and now i
                  improve my skill more and more. I usually using{" "}
                  <b> Golang </b> and exploring some back-end things like{" "}
                  <b>Message Queue Kafka</b>,<b>RESTFul API&apos;s</b> , <b>GraphQL</b>
                  ,<b> RPC, Authorization/Authentication, Microservices, Monolith, SQL/NOSQL, Docker</b>, etc.
                  Moreover i like a challenges & learning a new things.
                </p>
              </div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Dw8j3cM7K0Ev5jLHlW0uygNS3N9FR54j/view?usp=sharing"
                rel="noreferrer"
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
                <Image src="/about-me.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
