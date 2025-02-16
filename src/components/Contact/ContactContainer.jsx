import React from "react";
import Form from "./Form";
import Heading from "../Heading/Heading";
import FormHeading from "./FormHeading";
import Information from "./Information";
import contactInfo from "../../JSON/information.json";
import { motion } from "framer-motion";

const ContactContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.89 }}
      viewport={{ once: true }}
      id="Contact"
      className="md:w-[89%] mx-auto py-16 bg-primaryLight dark:bg-primaryDark"
    >
      <Heading
        skillName="Contact"
        text="For collaborations or inquiries, drop me a message! ✉️"
      />

      <div className="grid grid-cols-1 lg:flex gap-8 lg:grid-cols-2 mt-7">
        <div className="w-full lg:w-[60%]">
          <FormHeading text="leave us your information" />
          <Form />
        </div>

        <div className="text-secondaryLight lg:w-[40%]">
          <FormHeading text="contact information" />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.89, delay: 0.23 }}
            className="grid gap-6 lg:gap-10"
          >
            {contactInfo.map((element, index) => {
              return (
                <Information
                  key={element.intro}
                  id={index}
                  information={element}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactContainer;
