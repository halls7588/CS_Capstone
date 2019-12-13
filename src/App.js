import React, { useState } from "react";
import "./App.css";
import ToxicTable from "./tables/ToxicTable";
import AddCommentForm from "./forms/AddCommentForm";
import ToxicGraph from "./graphs/ToxicGraph";

const App = () => {
  // Example of how the information will be displayed in the table
  const sentenceData = [];
  // State variable
  const [sentences, setSentences] = useState(sentenceData);

  // Add input sentence to the table from the input value
  const addComment = input => {
    input.index = sentences.length + 1;
    setSentences([...sentences, input]);
  };

  // Delete one sentence from the table
  const deleteSentence = index => {
    setSentences(sentences.filter(input => input.index !== index));
  };

  // Delete all sentences from the table
  const deleteAll = index => {
    setSentences(
      sentences.filter(input => input.index.length !== index.length)
    );
  };

  return (
    <div className="App">
      <div className="inputs">
        <div className="InputForm">
          <h2 id="check">Add a comment</h2>
          <AddCommentForm addComment={addComment} />
        </div>
        <div className="ToxicTable">
          <ToxicTable
            sentences={sentences}
            deleteSentence={deleteSentence}
            deleteAll={deleteAll}
          />
        </div>
      </div>
      <ToxicGraph
        className="ToxicGraph"
        toxic={
          sentences.filter(coment => {
            if (coment.label !== "Comment is clean") return coment;
          }).length
        }
        clean={
          sentences.filter(coment => {
            if (coment.label === "Comment is clean") return coment;
          }).length
        }
      />
    </div>
  );
};

export default App;
