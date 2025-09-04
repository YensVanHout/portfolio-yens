import Image from "next/image";
import Title from "../title/title";
import Me from "@/assets/me.webp";
const About = () => {
  return (
    <div id="about" className="min-h-screen md:pt-20">
      <Title>About</Title>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full align-center">
          <h2 className="text-5xl pb-5">Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus
            quam mollitia sequi fugiat laboriosam, enim eaque ullam debitis quae
            facere ex quos eos. Reiciendis vitae ratione doloremque laboriosam
            aliquam!
          </p>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            maiores molestias aspernatur nostrum alias corrupti officia
            praesentium, nulla ex nihil iste quas dolorem necessitatibus!
            Aspernatur recusandae distinctio voluptate in pariatur!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            quaerat sit nesciunt nemo aliquid blanditiis non, odio accusantium
            aspernatur neque placeat consequuntur quam consequatur doloremque
            saepe nam ratione voluptatibus sunt.
          </p>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            placeat harum iure perferendis eaque error! Saepe, qui excepturi!
            Natus quisquam aliquid praesentium laborum, mollitia corporis
            recusandae expedita saepe nisi explicabo.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={Me}
            alt="portrait of me"
            placeholder="blur"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
