const Contact = () => {
  return (
    <div
      id="contact"
      className="section-container flex flex-col justify-between md:flex-row-reverse"
    >
      <div className="mt-6 w-1/2">
        <img src="/Images/myLogo.png" alt="" />
      </div>

      <div className="p-6 mt-6  shadow-lg">
        <div className="contact-header py-4 px-5 ">
          <p className="text-darkGrayishBlue">GET IN TOUCH</p>
          <h2 className="text-3xl text-grayishViolet font-black font-sans">
            Contact.
          </h2>
        </div>
        <div className="contact-form my-6">
          <div class="flex justify-center md:justify-start">
            <div class="w-[280px] bg-gradient-to-r from-transparent via-[#3b243e] to-[#51707d] border-2 border-transparent p-8 text-white rounded-2xl flex flex-col gap-5 border-box bg-[#212121] animate-gradient-x bg-no-repeat bg-[200%_100%]">
              <form class="flex flex-col gap-5">
                <div class="flex flex-col gap-1">
                  <label
                    for="name"
                    class="text-[#717171] font-semibold text-xs"
                  >
                    Your Name
                  </label>
                  <input
                    required
                    name="clientName"
                    id="clientName"
                    type="text"
                    class="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-veryDarkBlue placeholder:text-xs"
                    placeholder="What's your name?"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label
                    for="email"
                    class="text-[#717171] font-semibold text-xs"
                  >
                    Your Email
                  </label>
                  <input
                    required
                    name="email"
                    id="email"
                    type="text"
                    class="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-veryDarkBlue placeholder:text-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <label
                    for="textarea"
                    class="text-[#717171] font-semibold text-xs"
                  >
                    Your Message
                  </label>
                  <textarea
                    required
                    cols="50"
                    rows="10"
                    id="textarea"
                    name="textarea"
                    class="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white h-24 resize-none focus:outline-none focus:border-veryDarkBlue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-1/2 self-start px-4 py-3 bg-[#313131] border border-[#414141] text-[#717171] font-semibold rounded-lg hover:bg-white hover:border-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
