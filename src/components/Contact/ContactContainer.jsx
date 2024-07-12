import React from "react";
import Form from "./Form";
import Heading from "../Heading/Heading";
import FormHeading from "./FormHeading";

const ContactContainer = () => {
  return (
    <section className="w-[89%] mx-auto py-16 bg-primaryLight dark:bg-primaryDark">
      <Heading skillName="Contact" text="Hello world" />

      <div className="grid grid-cols-1 xl:flex lg:grid-cols-2 mt-7">
        <div className="w-[60%]">
          <FormHeading text="leave us your information" />
          <Form />
        </div>

        <div className="text-secondaryLight w-[40%]">
          <FormHeading text="contact information" />
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
