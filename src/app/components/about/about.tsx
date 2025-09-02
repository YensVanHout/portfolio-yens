import Title from '../title/title';

const About = () => {
  return (
    <div id="about" className="min-h-screen md:pt-20">
      <Title>About</Title>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="dark:text-white text-5xl font-bold">
            Lorem ipsum dolor
          </h2>
          <div className="w-full pt-5 dark:text-white align-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus quam mollitia sequi fugiat
              laboriosam, enim eaque ullam debitis quae facere ex quos eos. Reiciendis vitae ratione doloremque
              laboriosam aliquam!
            </p>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta maiores molestias aspernatur nostrum alias
              corrupti officia praesentium, nulla ex nihil iste quas dolorem necessitatibus! Aspernatur recusandae
              distinctio voluptate in pariatur!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quaerat sit nesciunt nemo aliquid
              blanditiis non, odio accusantium aspernatur neque placeat consequuntur quam consequatur doloremque saepe
              nam ratione voluptatibus sunt.
            </p>
            <p className="my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat harum iure perferendis eaque error!
              Saepe, qui excepturi! Natus quisquam aliquid praesentium laborum, mollitia corporis recusandae expedita
              saepe nisi explicabo.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://placehold.co/700x1000/EEE/31343C"
            alt="picture of me"
            className="w-1/2 md:w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
