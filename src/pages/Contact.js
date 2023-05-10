import React, { useState, useRef } from "react";
//component
import PageHeader from "../components/PageHeader";
//image
import img from "../assets/img/heroSlider/66.jpg";
//icons
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdCall, MdEmail } from "react-icons/md";
//data
import { freAndQue } from "../datas/contactData";
import ScrollToTop from "../components/ScrollToTop";
import Model from "../components/Model";

const Contact = () => {
  const [fNQArr, setFNQArr] = useState(freAndQue);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [isModal, setIsModal] = useState(false);

  const clickHandler = (id) => {
    const newFnQArr = fNQArr.map((fNQ) =>
      fNQ.id === id
        ? { ...fNQ, isOpen: !fNQ.isOpen }
        : { ...fNQ, isOpen: false }
    );
    setFNQArr(newFnQArr);
  };

  let timmer;
  const submitHandler = (e) => {
    e.preventDefault();
    setIsModal(true);

    timmer = setTimeout(() => {
      setIsModal(false);
    }, 7000);
  };

  return (
    <div>
      <ScrollToTop />
      {isModal && (
        <Model
          name={nameRef.current.value}
          email={emailRef.current.value}
          message={messageRef.current.value}
          timmer={timmer}
          setIsModal={setIsModal}
          hidden="hidden"
        />
      )}
      <PageHeader
        img={img}
        pera="Have a comment, suggestion, or feedback?"
        heading="Let's Talk"
      />
      <div className="container mx-auto">
        <div className="mt-12 mb-20">
          <h2 className="h2 mb-1 text-center">Drop Us a Line</h2>
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center justify-center gap-x-2">
              <span></span>
              <MdCall className="text-accent" /> <span>+9942167218</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <span></span>
              <MdEmail className="text-accent" />{" "}
              <span>aidnahotel@gamil.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row h-full pb-24">
          {/* left */}
          <div className="w-full h-full px-2 lg:px-6 lg:w-[40%]">
            <div className="py-8 px-3 lg:px-5 bg-accent/30 mb-6">
              <div className="flex flex-col space-y-4 mb-4">
                <h3 className="h3">Contact Us</h3>
                <form className="flex flex-col mb-4" onSubmit={submitHandler}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="Name"
                    placeholder="Enter Your Name"
                    required
                    className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-2 mb-4"
                    ref={nameRef}
                  />
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-2 mb-4"
                    ref={emailRef}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name=""
                    id="message"
                    cols="30"
                    rows="4"
                    className="px-2 py-2 outline-none border-none placeholder:text-gray-400 mt-2 mb-4"
                    placeholder="Have a comment, suggestion, or feedback about your stay? We're all ears!"
                    required
                    ref={messageRef}
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-sm max-w-[240px] py-2 mx-auto mt-6 font-semibold"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-accent/30 px-3 lg:px-5 pt-4 pb-2">
              <h3 className="h3">Address</h3>
              <address>ADINA Hotel</address>
              <address>
                Ashram Marg, Near, Jawahar Circle, Jaipur, Rajasthan 302015
              </address>
            </div>
            <div className="bg-accent/30 p-2 lg:p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9431737628065!2d75.79361397512389!3d26.841759676689524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e591a66633%3A0xef403de8e5c9ad89!2sJaipur%20Marriott%20Hotel!5e0!3m2!1sen!2sin!4v1681323050380!5m2!1sen!2sin"
                style={{ border: "1px solid" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full mt-12 lg:mt-0 lg:w-[60%]">
            <div className="pt-2 pb-8 px-0 lg:px-5 mb-6">
              <div className="flex flex-col space-y-4 mb-4 gap-3 lg:gap-6">
                <div className="text-center">
                  <h3 className="h3">Frequently Asked Questions</h3>
                  <p>Have questions? We are here to help.</p>
                </div>
                <div className="mt-4 lg:mt-12 p-1 lg:p-3">
                  {fNQArr.map((fAndQ, idx) => (
                    <div key={idx}>
                      <div
                        className={`flex items-center py-4 justify-between cursor-pointer ${
                          fAndQ.isOpen ? "" : "border-b border-accent"
                        }`}
                        onClick={() => clickHandler(fAndQ.id)}
                      >
                        <h4 className="text-[1.1rem] lg:text-xl font-[500] text-gray-700">
                          {fAndQ.question}
                        </h4>
                        {fAndQ.isOpen ? (
                          <BsChevronUp className="font-bold text-xl text-black" />
                        ) : (
                          <BsChevronDown className="font-bold text-xl text-black" />
                        )}
                      </div>
                      {fAndQ.isOpen && (
                        <div className="p-3 border-b border-accent bg-accent/20">
                          <p>{fAndQ.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
