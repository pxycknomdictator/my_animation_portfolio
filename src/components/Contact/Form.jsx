import React, { useContext } from "react";
import FormName from "./FormName";
import FormStore from "../../Store";

const Form = () => {
  const { user, handleSubmitForm, handleChangeFields, error } =
    useContext(FormStore);

  return (
    <form
      className="w-full pb-7 flex flex-col gap-4 p-4 sm:pt-7 px-7 lg:pb-0 bg-secondaryLight dark:bg-secondaryDark md:rounded-xl lg:h-[91.2%]"
      onSubmit={handleSubmitForm}
    >
      <div>
        <FormName field="Your Full Name" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={user.name}
          onChange={(event) => handleChangeFields(event)}
        />
        <span className="text-red-500 block mt-4 font-[500]">{error.name}</span>
      </div>

      <div>
        <FormName field="Your Email Address" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="email"
          placeholder="Enter your email address"
          value={user.email}
          onChange={(event) => handleChangeFields(event)}
        />
        <span className="text-red-500 block mt-4 font-[500]">{error.email}</span>
      </div>

      <div>
        <FormName field="Subject" />
        <input
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          type="text"
          name="subject"
          placeholder="Enter your subject"
          value={user.subject}
          onChange={(event) => handleChangeFields(event)}
        />
        <span className="text-red-500 block mt-4 font-[500]">{error.subject}</span>
      </div>

      <div>
        <FormName field="Your Message" />
        <textarea
          rows="6"
          className="rounded-sm outline-none border-none bg-primaryLight dark:bg-primaryDark text-secondaryDark dark:text-secondaryLight w-full py-2.5 pl-4 text-[1.1rem] inline-block mt-3"
          name="message"
          value={user.message}
          onChange={(event) => handleChangeFields(event)}
        ></textarea>
        <span className="text-red-500 block mt-4 font-[500]">{error.message}</span>
      </div>

      <div>
        <button
          className="uppercase font-[500] bg-blue-500 hover:bg-blue-600 text-secondaryLight py-2 w-full rounded-md md:w-44 md:py-2.5 lg:rounded-sm outline-none transition-all"
          type="submit"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;
