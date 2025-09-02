import Title from '../title/title';

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto" id="contact">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/c8e75e34-a1ea-4dba-a366-d8a4d8b1f79f"
          method="POST"
          className="flex flex-col w-full md:w-9/12"
        >
          <Title>Contact</Title>
          <label htmlFor="name" className="text-xl pb-1">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
          />
          <label htmlFor="email" className="text-xl pb-1">E-Mail: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
          />
          <label htmlFor="Message" className="text-xl pb-1">Message: </label>
          <textarea
            name="message"
            placeholder="Message..."
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md mb-4"
          />
          <button
            type="submit"
            className="cursor-pointer inline-block px-12 py-3 w-max text-base font-medium rounded-md text-white mx-auto dark:text-stone-900 bg-stone-900 dark:bg-white"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
