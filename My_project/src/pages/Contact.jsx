// // File: src/pages/Contact.jsx
// import React from "react";
// import { Form, Input, Button } from "antd";
// import { MessageOutlined } from "@ant-design/icons";

// const Contact = () => (
//   <section className="p-10 bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] min-h-screen flex items-center justify-center">
//     <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side - Text & Creative Content */}
//         <div className="bg-[#1e40af] text-white p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-4">We’d love to hear from you</h2>
//           <p className="text-lg mb-6">
//             Whether you have a question, feedback, or just want to say hello —
//             our team is ready to assist you.
//           </p>
//           <blockquote className="italic text-sm border-l-4 pl-4 border-white/50">
//             “Communication leads to community, that is, to understanding,
//             intimacy, and mutual valuing.” – Rollo May
//           </blockquote>
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="p-8">
//           <h3 className="text-2xl font-semibold text-center mb-6 text-[#1e3a8a] flex items-center justify-center gap-2">
//             <MessageOutlined className="text-[#1e3a8a]" />
//             Contact Form
//           </h3>
//           <Form layout="vertical">
//             <Form.Item
//               label="Your Name"
//               name="name"
//               rules={[{ required: true, message: "Please enter your name" }]}
//             >
//               <Input size="large" placeholder="John Doe" />
//             </Form.Item>

//             <Form.Item
//               label="Email Address"
//               name="email"
//               rules={[
//                 { required: true, message: "Please enter your email" },
//                 { type: "email", message: "Enter a valid email" },
//               ]}
//             >
//               <Input size="large" placeholder="john@example.com" />
//             </Form.Item>

//             <Form.Item
//               label="Your Message"
//               name="message"
//               rules={[{ required: true, message: "Please enter your message" }]}
//             >
//               <Input.TextArea
//                 size="large"
//                 rows={4}
//                 placeholder="How can we help you?"
//               />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 size="large"
//                 className="w-full bg-[#1e40af] hover:bg-[#1e3a8a]"
//               >
//                 Send Message
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Contact;



// File: src/pages/Contact.jsx
import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, FacebookFilled, TwitterSquareFilled, InstagramFilled, MessageOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
      <section className="bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] py-10 px-4 md:px-10 ">
 <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-[#332421] mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
    >
      Contact Us
    </motion.h2>
     <motion.p
          className="text-center italic font-semibold text-[#472f1e]  py-6 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          “नर्मदायै नमः” — Our stones come from the sacred Narmada, our hands from
          divine tradition.
        </motion.p>
    <section className="min-h-screen bg-gradient-to-tr from-[#fefce8] to-[#ffedd5] p-6 flex items-center justify-center">
     
     
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* 1e3a8a */}
        {/* Left Panel */}
        <div className="bg-[#472f1e]  text-white p-8 flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-down">Let’s Connect</h2>
            <p className="text-lg mb-6 leading-relaxed animate-fade-in-up">
              Have a question, feedback, or just want to say hello?
              Drop us a message and we’ll get back to you shortly.
            </p>
            <blockquote className="italic flex items-center gap-3  border-l-4    border-white text-white mb-3  shadow-md p-3 rounded-xl hover:shadow-lg transition duration-300 animate-fade-in">
              “The art of communication is the language of leadership.” <br />– James Humes
            </blockquote>

            {/* <div className="space-y-3">
              <p className="flex items-center gap-2"><MailOutlined /> hello@example.com</p>
              <p className="flex items-center gap-2"><PhoneOutlined /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><EnvironmentOutlined /> Bhopal, MP, India</p>
            </div> */}
              <div className="space-y-4 text-gray-800">
    <p className="flex items-center gap-3  border-l-4   border-white text-white  shadow-md p-3 rounded-xl hover:shadow-lg transition duration-300">
      <span className="text-blue-600 text-xl bg-blue-100 p-2 rounded-full">
        <MailOutlined />
      </span>
      hello@example.com
    </p>

    <p className="flex items-center gap-3  border-l-4   border-white text-white  shadow-md p-3 rounded-xl hover:shadow-lg transition duration-300">
      <span className="text-green-600 text-xl bg-green-100 p-2 rounded-full">
        <PhoneOutlined />
      </span>
      +91 98765 43210
    </p>

    <p className="flex items-center gap-3 border-l-4   border-white text-white shadow-md p-3 rounded-xl hover:shadow-lg transition duration-300">
      <span className="text-red-600 text-xl bg-red-100 p-2 rounded-full">
        <EnvironmentOutlined />
      </span>
      Bhopal, MP, India
    </p>
  </div>

          </div>

          {/* Social Links */}
          {/* <div className="flex gap-4 text-2xl pt-4">
            <a href="#" className="hover:text-blue-300"><FacebookFilled /></a>
            <a href="#" className="hover:text-blue-300"><TwitterSquareFilled /></a>
            <a href="#" className="hover:text-pink-300"><InstagramFilled /></a>
          </div> */}
           <div className="flex gap-4 pt-4">
    <a
      href="#"
      className="text-white bg-[#1877F2] p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
    >
      <FacebookFilled className="text-xl" />
    </a>
    <a
      href="#"
      className="text-white bg-[#1DA1F2]  p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
    >
      <TwitterSquareFilled className="text-xl" />
    </a>
    <a
      href="#"
      className="text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
    >
      <InstagramFilled className="text-xl" />
    </a>
  </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-center text-[#332421] mb-6  flex items-center justify-center gap-2 animate-fade-in-up" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
             <MessageOutlined className="text-[#332421]" /> 
            Send Us a Message
          </h3>

          <Form layout="vertical" name="contact-form" 
          // onFinish={(values) => console.log(values, "Form Submitted")}
          onFinish={(values) => {
    const { name, email, message } = values;

    // Format the message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;

    // WhatsApp number with country code (India = 91)
    const phoneNumber = "919926642925"; // 91 is the country code for India

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappURL, "_blank");
  }}

          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              
            >
              <Input size="large" placeholder="Yash Namdev" className="HOV" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input size="large" placeholder="you@example.com" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your message goes here..." size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full !bg-[#472f1e] hover:!bg-[#332421]"
              >
                Submit Message
              </Button>
            </Form.Item>
          </Form>

          {/* Bonus: FAQ Teaser */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Looking for quick answers? Check our <span className="text-[#1e3a8a] underline cursor-pointer hover:text-[#3b82f6]">FAQ page</span>.
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Contact;
