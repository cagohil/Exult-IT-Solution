import { useState } from 'react';
import axios from 'axios';
import contactInfo from '@data/Contact/form.json';

const Form = ({ style = "4" }) => {
  
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    option: "",
    message: ""
  });

  const contactInfoData = contactInfo;

  const handleFormChange = (e) => {
    setFormdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    formValues.append('name', formData.name);
    formValues.append('email', formData.email);
    formValues.append('phone', formData.phone);
    formValues.append('services', formData.services);
    formValues.append('message', formData.message);
    
    const res = await axios.post('/contact.php', formValues)
      .catch(err => alert(err.message));

    if (!res) return;

    alert('Form submitted successfully.')
  }

  return (
    <section className={`contact pt-4 pb-5 style-6`}>
      {
        style === '5' && (
          <>
          <div className="section-head text-center mb-50 style-5">
              <h2 className="mb-20">{ 'Have Any' } <span>{ 'Question?' }</span></h2>
              <strong><p className='pb-2'>{ 'Looking For Exclusive Digital Services?' }</p></strong>
              <p>{ 'Services you are looking for?' }</p>
            </div>
          </>
        )
      }
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form action="contact.php" className="form" method="post" onSubmit={handleFormSubmit}>
                <p className="text-center text-danger fs-12px mb-30">{ 'The field is required mark as *' }</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="name" className="form-control" placeholder={  "Your Name" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="email" className="form-control" placeholder={  "Email Address *" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="phone" className="form-control" placeholder={ "Phone Number" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                    <select className="form-select" defaultValue={ "Website Development" } name="services" onChange={handleFormChange}>
                        <option value="Website Development">{ 'Website Development' }</option>
                        <option value="Cloud Services">{ 'Cloud Services' }</option>
                        <option value="Mobile App Development">{ 'Mobile App Development' }</option>
                        <option value="CRM Software Company">{ 'CRM Software Company' }</option>
                        <option value="E-commerce Web Development">{ 'E-commerce Web Development' }</option>
                        <option value="Search Engine Optimization">{ 'Search Engine Optimization' }</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea rows="10" name="message" className="form-control" placeholder={ "How can we help you?" } onChange={handleFormChange}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center mt-30">
                    <input type="submit" value={ 'Send Your Request' } className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
          <img src="/assets/img/icons/contact_message.png" alt="" className="contact_message" />
        </div>
      </div>
    </section>
    
  )
}

export default Form