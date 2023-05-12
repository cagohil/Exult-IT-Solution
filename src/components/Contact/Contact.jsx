import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_js420fa', 'template_dj0z8m8', form.current, 'QGeVygFDTemL6Dwwd')
      .then((result) => {
        console.log(result.text);
        toast.success('Submitted Successfully!')
        setTimeout(() => {
          e.target.reset();
      }, 5000);
      }, (error) => {
        console.log(error.text);
        toast.error('please try agin')
      });
  };
  
  return (
    <section className="contact style-5 py-5">
      <ToastContainer />
      <div className="container">
        <div className="section-head text-center mb-40 style-5">
          <h2 className="mb-20">{'Get In'}<span>{'Touch'}</span></h2> 
          <p className='pb-2'>{'Looking For Exclusive Digital Services?'}</p>
          {/* <p>{'Services you are looking for?'}</p> */}
        </div>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input type="text" className="form-control" name='Name' placeholder="Full name" required />
                <span className="icon"> <i className="fas fa-user"></i> </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input type="text" className="form-control" name='Phone' placeholder="Phone number" required />
                <span className="icon"> <i className="fas fa-phone"></i> </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input type="email" className="form-control" name='Email' placeholder="Email address" required />
                <span className="icon"> <i className="fas fa-envelope"></i> </span>
              </div>
            </div>
            <div className="col-lg-6 form-group">
              <select className="form-control" defaultValue={"Website Development"} name="Service" >
                <option value="Website Development">{'Website Development'}</option>
                <option value="Cloud Services">{'Cloud Services'}</option>
                <option value="Mobile App Development">{'Mobile App Development'}</option>
                <option value="CRM Software Company">{'CRM Software Company'}</option>
                <option value="E-commerce Web Development">{'E-commerce Web Development'}</option>
                <option value="Search Engine Optimization">{'Search Engine Optimization'}</option>
              </select>
              <span className="icon"> <i className="fas fa-angle-down ms-3 "></i> </span>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <textarea rows="6" placeholder="Message" name='Message' className="form-control"></textarea>
                <span className="icon"> <i className="fas fa-pen"></i> </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="butn bg-blue5 rounded-3 mt-20 py-3 text-white border-0">
              <span> Make A Request <i className="far fa-long-arrow-right ms-2"></i> </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact