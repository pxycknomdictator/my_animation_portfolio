import React from "react";
import FormName from "./FormName";

const Form = () => {
  return (
    <form className="w-full flex flex-col gap-8 p-7 bg-secondaryLight dark:bg-secondaryDark">
      <div>
        <FormName field="Your Full Name" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="name"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <FormName field="Your Email Address" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="email"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <FormName field="Subject" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="subject"
          placeholder="Enter your subject"
        />
      </div>

      <div>
        <FormName field="Your Message" />
        <textarea
          rows="6"
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          name="message"
        ></textarea>
      </div>

      <div>
        <button
          className="uppercase font-[500] bg-blue-500 hover:bg-blue-600 text-secondaryLight py-2 lg:px-5 rounded-sm outline-none transition-all"
          type="submit"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;
