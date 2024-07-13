import React from "react";
import Form from "./Form";
import Heading from "../Heading/Heading";
import FormHeading from "./FormHeading";
import Information from "./Information";
import contactInfo from "../../JSON/information.json";

const ContactContainer = () => {
  return (
    <section className="md:w-[89%] mx-auto py-16 bg-primaryLight dark:bg-primaryDark">
      <Heading skillName="Contact" text="Hello world" />

      <div className="grid grid-cols-1 lg:flex gap-8 lg:grid-cols-2 mt-7">
        <div className="w-full lg:w-[60%]">
          <FormHeading text="leave us your information" />
          <Form />
        </div>

        <div className="text-secondaryLight lg:w-[40%]">
          <FormHeading text="contact information" />
          <div className="grid gap-6 lg:gap-10">
            {contactInfo.map((element) => {
              return <Information key={element.intro} information={element} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
