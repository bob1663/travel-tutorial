import React from "react";
import { images } from "../../constants";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="app__faq">
      <h2>Frequently asked questions</h2>
      <div className="app__faq-content">
        <div className="app__faq-content-questions">
          <h4>1. About Unwind Cabins</h4>
          <p>• How long have you been in business?</p>
          <p>• Why did you start this journey?</p>
        </div>
        <div className="app__faq-content-button">
          <button type="button">
            <p>About our cabins</p>
            <img src={images.ArrowRightCircle} alt="ArrowRightCircle" />
          </button>
        </div>
      </div>
      <div className="app__faq-content">
        <div className="app__faq-content-questions">
          <h4>2. Tell me more about the cabin</h4>
          <p>• What do I need to bring?</p>
          <p>• How do I get to the cabin?</p>
        </div>
        <div className="app__faq-content-button">
          <button type="button">
            <p>Tell me more about the cabin</p>
            <img src={images.ArrowRightCircle} alt="ArrowRightCircle" />
          </button>
        </div>
      </div>
      <div className="app__faq-content">
        <div className="app__faq-content-questions">
          <h4>3. Pets, family & friends</h4>
          <p>• Please tell me I can bring my dog</p>
          <p>• How many people do you cabins sleep?</p>
        </div>
        <div className="app__faq-content-button">
          <button type="button">
            <p>Pets, family & friends</p>
            <img src={images.ArrowRightCircle} alt="ArrowRightCircle" />
          </button>
        </div>
      </div>
      <div className="app__faq-moreInfo">
        <h4>Still have a question?</h4>
        <p>
          If you still have questions contact a member of the team on live chat
          and we’d be more than happy to help.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
