import Image from "next/image";
import Title from "../title/title";
import Me from "@/assets/me.webp";
const About = () => {
  return (
    <div id="about" className="min-h-screen md:pt-20">
      <Title>About</Title>
      <div className="w-full flex flex-col md:flex-row-reverse">
        <div className="w-full align-center flex flex-col align-center items-center justify-center text-xl">
          <h2 className="text-5xl pb-5">Code with purpose.</h2>
          <p>
            I'm an aspiring developer with a strong foundation in Java and a
            passion for building clean, efficient code.
          </p>
          <p className="my-4">
            My journey into development began started at Artesis Plantyn
            Hogeschool, where I quickly fell in love with solving problems and
            automating tasks.
          </p>
          <p className="my-4">
            While I'm at the beginning of my career, I've spent my time building
            my skills in Java, React and MongoDB through personal projects and
            coursework.
          </p>
          <p className="my-4">
            I am a quick learner, highly motivated, and dedicated to writing
            code that is both functional and easy to maintain.
          </p>{" "}
          <p className="my-4">
            I'm excited by the opportunity to contribute my skills to a
            collaborative team and learn from experienced professionals.
          </p>
        </div>
        <div className="w-full flex items-center justify-center md:pr-8">
          <Image
            src={Me}
            alt="portrait of me"
            placeholder="blur"
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
