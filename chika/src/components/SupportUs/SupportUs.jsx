import React from "react";
import "./SupportUs.css";
import staff from "../../images/ChikaliciousStaff.png";

const SupportUs = () => (
  <section className="support-us" id="support">
    <div className="heading">
      <h2>Support Us</h2>
      <div className="line"></div>
    </div>

    <div className="container-support" >
      <div>
        <p>
          We ask for your help in this time of uncertainty. Please support our
          staff directly by donating to our GoFundMe link: <br />
          <br />
          Thank you!
        </p>
        <a href="#">Staff GoFundMe </a>
      </div>

      <div>
        <p>
          You can also purchase gift certificates, which help us support our
          staff and suppliers. <br />
          <br />
          Thank you!
        </p>
        <a
          href="https://onelink.quickgifts.com/merchant/chikalicious/"
          target="_blank"
        >
          Gift Certificates
        </a>
      </div>

      <div>
        <img src={staff} alt="lady cooking dessert" />
      </div>
    </div>
  </section>
);

export default SupportUs;
