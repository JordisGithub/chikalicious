import React from "react";
import "./SupportUs.css";
import staff from "../../images/ChikaliciousStaff.png";
const SupportUs = () => (
  <section className="support-us" id="support">
    <div className="supportus-dotted-divider"></div>
    <div className="heading">
      <h2>Support Us</h2>
      <div className="line"></div>
    </div>
    <div className="container-support">
      <div>
        <div className="support-description">
          We ask for your help in this time of uncertainty. Please support our
          staff directly by donating to our GoFundMe link: <br />
          <br />
          Thank you!
        </div>
        <div className="staff-gofundme-link">
          <a href="#">Staff GoFundMe</a>
          <span
            className="arrow"
            style={{
              textDecoration: "none",
              color: "#ffe5b9",
              fontSize: "24px",
              marginRight: "2px"
            }}
          >
            >
          </span>
        </div>
      </div>
      <div className="support-description-desktop">
        <div className="support-description">
          You can also purchase gift certificates, which help us support our
          staff and suppliers. <br />
          <br />
          Thank you!
        </div>
        <div className="gift-certificate-link">
          <a
            href="https://onelink.quickgifts.com/merchant/chikalicious/"
            target="_blank"
          >
            Gift Certificates
          </a>
          <span
            className="arrow"
            style={{
              textDecoration: "none",
              color: "#ffe5b9",
              fontSize: "24px",
              marginRight: "2px"
            }}
          >
            >
          </span>
        </div>
      </div>
      <div className="support-pic">
        <img src={staff} alt="lady cooking dessert" />
      </div>
      <div className="support-description-mobile">
        <div>
          You can also purchase gift certificates, which help us support our
          staff and suppliers. <br />
          <br />
          <br />
          Thank you! <br />
        </div>
        <div className="gift-certificate-link mobile-gift">
          <a
            href="https://onelink.quickgifts.com/merchant/chikalicious/"
            target="_blank"
          >
            <br />
            Gift Certificates
          </a>
          <span
            className="arrow"
            style={{
              textDecoration: "none",
              color: "#ffe5b9",
              fontSize: "24px",
              marginRight: "2px"
            }}
          >
            >
          </span>
        </div>
      </div>
    </div>
  </section>
);
export default SupportUs;
