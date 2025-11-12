"use client";
import { useState } from "react";
import Title from "../title/title";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>,
        ).toString(),
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        (event.currentTarget as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          "Sorry, there was an error sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Sorry, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col mb-10 mx-auto" id="contact">
      <div className="flex justify-center items-center">
        <form
          name="contact"
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full md:w-9/12"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Title>Contact</Title>
          <label htmlFor="name" className="text-xl pb-1">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
            disabled={isSubmitting}
          />
          <label htmlFor="email" className="text-xl pb-1">
            E-Mail:{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 bg-transparent border-2 rounded-md mb-4"
            disabled={isSubmitting}
          />
          <label htmlFor="Message" className="text-xl pb-1">
            Message:{" "}
          </label>
          <textarea
            name="message"
            placeholder="Message..."
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md"
            disabled={isSubmitting}
          />
          {submitStatus && (
            <div
              className={`mb-4 p-3 rounded-md text-center ${
                submitStatus === "success"
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
              }`}
            >
              {statusMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-block px-12 py-3 w-max text-base font-medium rounded-md mx-auto text-white dark:text-stone-900 bg-stone-900 dark:bg-white transition-opacity ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-stone-800 dark:hover:bg-stone-100"
            }`}
          >
            {isSubmitting ? "Sending..." : "Get in touch"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
