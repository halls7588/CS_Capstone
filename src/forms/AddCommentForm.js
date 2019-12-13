import React, { useState } from "react";
import * as toxicity from "@tensorflow-models/toxicity";

const AddCommentForm = props => {
  const initialFormState = {
    index: null,
    sentence: "",
    predicition: "",
    emoji: "",
    label: ""
  };

  // State variable
  const [input, setInput] = useState(initialFormState);

  // Adding pre-trained model from tensorflow.js
  const addModel = () => {
    // Only probabilites above 90%
    const threshold = 0.9;

    // Load pre-trained model from tensorflow.js
    toxicity.load(threshold).then(model => {
      model.classify([input.sentence]).then(predictions => {
        // Loop to check if the sentence is toxic
        let isToxic = 0;
        let toxicLable = "";
        predictions.forEach(item => {
          if (
            isToxic < item.results[0].probabilities[0] &&
            (item.results[0].match == null || item.results[0].match == true)
          ) {
            isToxic = item.results[0].probabilities[0];
            toxicLable = item.label;
          }
        });
        console.log(toxicLable, isToxic);

        // Loop to check probabilities for this being toxic
        let probab;
        predictions.forEach(item => {
          probab = item.results[0].probabilities[1];
        });
        console.log("This is probab " + probab);

        // Random display of array
        const clean = "Comment is clean";

        // If matches "true" (sentence is toxic)
        if (isToxic > 0.6 || isToxic === null) {
          // Labels in dataset, display label in table
          for (let pred of predictions) {
            input.label = "Comment clasified as " + toxicLable;
            console.log("Label " + pred.label);
          }

          input.prediction = Math.round(probab * 100) + "%"; // Predictions in %
          input.emoji = (
            <span role="img" aria-label="toxic">
              ☣️
            </span>
          ); //Emoji displayed
          props.addComment(input); // Add sentence to table
          setInput(initialFormState); // Set state
          //console.log("This is toxic!");
          console.log("Probabilities for this being insulting " + isToxic);
          console.log(predictions);
        }

        // Match is false (sentence is not toxic)
        else {
          input.prediction = Math.round(probab * 100) + "%";
          input.emoji = (
            <span role="img" aria-label="clean">
              ✔️
            </span>
          );
          input.label = clean; // Random sentence from array instead of label
          props.addComment(input); // Add sentence to table
          setInput(initialFormState); // Set state
          //console.log("This is not toxic");
          console.log(predictions);
        }
      });
    });
  };

  // Input value
  const handleInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  // Clear input field
  const resetForm = () => {
    setInput(initialFormState);
  };

  // Submit model, if no input nothing adds to the table
  const onSubmitEvent = event => {
    event.preventDefault();

    // If no input, return
    if (!input.sentence) return;

    // Add toxic classifier model to table
    addModel();
  };

  return (
    <div className="input-form">
      <div className="input-sentence">
        <h2 id="show-sentence">{input.sentence}</h2>
      </div>
      <form onSubmit={onSubmitEvent}>
        <input
          id="input"
          type="text"
          autoComplete="off"
          placeholder="Type a comment like this one"
          name="sentence"
          value={input.sentence}
          onChange={handleInput}
          className="form-control"
        />
        <button className="btn btn-primary">
          Check if your comment is toxic
        </button>
      </form>
      <button className="btn btn-info" id="reset-input" onClick={resetForm}>
        Clear Comment
      </button>
    </div>
  );
};

export default AddCommentForm;
