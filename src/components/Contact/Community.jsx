import communityData from '@data/Contact/community.json';

const Community = () => {
  return (
    <section className="community mb-50 style-5">
      <div className="container">
        <div className="section-head text-center style-5 mb-40">
          <h2 className="mb-20">Get In <span>Touch</span> </h2>
          <p>We will contact again after receive your request in 24h</p>
        </div>
        <div className="content rounded-pill">
          {
            communityData.map((card, i) => (
              <div className="commun-card" key={i}>
                <div className="icon icon-45">
                  <img src={card.icon} alt="" />
                </div>
                <div className="inf">
                  <h5>{ card.info }</h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* <div className="section-head text-center mb-50 mt-60 style-5">
              <h2 className="mb-20">{ 'Get In' } <span>{ 'Touch' }</span></h2>
              <p>{ 'We will contact again after receive your request in 24h' }</p>
            </div>
            <div className="text-center">
              <h4 className="ltspc-3 fw-normal mb-20 color-000"><a href="tel:+1-586-569-9657"><i class="fal fa-phone"></i> { contactInfoData.phone }</a></h4>
              <h4 className="fw-normal mb-20 color-000"><a href="mailto:info@exultitsolution.com"><i class="fal fa-envelope"></i> { contactInfoData.email }</a></h4>
              <h4 className="fw-normal mb-20 color-000"><a href="mailto:sales@exultitsolution.com"><i class="fal fa-envelope"></i> { contactInfoData.email2 }</a></h4>
              <h4 className="fw-normal mb-10 color-000"><i class="fal fa-map-marker-alt"></i> { contactInfoData.address }</h4>
            </div> */}
    </section>
  )
}

export default Community