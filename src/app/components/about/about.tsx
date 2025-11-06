import Image from "next/image";
import Title from "../title/title";
import Me from "@/assets/me.webp";
const About = () => {
  return (
    <div id="about" className="min-h-screen md:pt-20">
      <Title>About</Title>
      <div className="w-full flex flex-col md:flex-row-reverse">
        <div className="w-full align-center flex flex-col align-center items-center justify-center text-xl">
          <h2 className="text-3xl pb-5">
            The Coder and the Strategist: My Approach to Work
          </h2>
          <p>
            What initially drew me to programming was the pure challenge of
            taking an idea and breaking it down into an functional solution. I
            have a deep and consistent love for technical problem-solving and
            optimization, and I thrive when creating structured, reliable code.
          </p>
          <p className="my-12">
            This commitment to high-level strategy and effective execution
            extends directly into my personal life. When I step away from my
            editor, I often join my friends for large-scale raids in World of
            Warcraft. This hobby goes beyond simple relaxation; it's a dynamic
            training ground for essential professional skills.
          </p>
          <p className="my-12">
            Success in these high-stakes digital environments demands more than
            just skill—it requires seamless teamwork, clear communication under
            intense pressure, and, most importantly, rapid adaptability. When a
            plan breaks down mid-raid, the ability to pivot immediately and
            coordinate with a group to execute a new strategy is crucial. These
            are the very same qualities of collaboration and resilience that I
            bring to every professional project, ensuring we meet unexpected
            challenges head-on and deliver successful results.
          </p>
        </div>
        {/*
          TODO: ADD NEW IMAGE
          <div className="w-full flex items-center justify-center md:pr-8">
          <Image
            src={Me}
            alt="portrait of me"
            placeholder="blur"
            style={{ objectFit: "fill" }}
          />
        </div>*/}
      </div>
    </div>
  );
};

export default About;
