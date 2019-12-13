import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/data"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dataset
        </a>
      </div>

      <div>
        <a
          href="https://github.com/tensorflow/tfjs-models/tree/master/toxicity"
          rel="noopener noreferrer"
          target="_blank"
        >
          Toxicity classifier
        </a>
      </div>

      <div>
        <a
          href="https://github.com/tensorflow/tfjs-models"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tensorflow.js
        </a>
      </div>
    </footer>
  );
};

export default Footer;
