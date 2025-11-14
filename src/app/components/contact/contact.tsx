"use client";
import Title from "../ui/title";

const Contact = () => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
  };

  return (
    <div className="flex flex-col mx-auto md:pt-20" id="contact">
      <Title>Contact</Title>
      <div className="flex justify-center items-center">
        <form
          name="contact"
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full md:w-9/12"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="text-xl pb-1">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="false"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
          />
          <label htmlFor="email" className="text-xl pb-1">
            E-Mail:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="false"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
          />
          <label htmlFor="message" className="text-xl pb-1">
            Message:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message..."
            rows={10}
            autoComplete="false"
            className="p-2 mb-4 bg-transparent border-2 rounded-md"
          />
          <button
            type="submit"
            className="cursor-pointer inline-block px-12 py-3 w-max text-base font-medium rounded-md mx-auto border-5 border-solid border-violet-400 text-white bg-custom-dark hover:bg-custom-dark/50 dark:bg-white dark:hover:bg-custom-main  dark:text-black"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
