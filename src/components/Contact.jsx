import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { login, send } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send
      ('service_qcpbbjr', 
      'template_zsznpsd',
      {
        from_name: form.name,
        to_name: 'Jelli Uayan',
        from_email: form.email,
        to_email: 'uayanjelli@gmail.com',
        message: form.message,
      },
      'MCDYMGtLzpM_5rjeu'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className= "xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[20px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label className= "flex flex-col">
              <span className="text-yellow-200 font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className= "flex flex-col">
              <span className="text-yellow-200 font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className= "flex flex-col">
              <span className="text-yellow-200 font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <div className="flex gap-4">
  <button
    type="submit"
    className="bg-black-200 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
  >
    {loading ? (
      <>
        <img src={loadingIcon} alt="loading" className="w-6 h-6 mr-2" />
        Sending...
      </>
    ) : (
      <>
        <img src={send} alt="send" className="w-6 h-6 mr-2" />
        SEND
      </>
    )}
  </button>
</div>


        </form>
      </motion.div>

    
          <motion.div
            variants={slideIn('right', "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
          
    </div>
  )
}

export default SectionWrapper(Contact, "contact")