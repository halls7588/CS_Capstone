import React from "react";

const ToxicTable = props => (
  <table>
    <thead>
      <tr>
        <th>Your comment</th>
        <th>% of toxicity</th>
        <th>
          <span role="img" aria-label="skull-and-love" id="emoji">
            ✔️☣️
          </span>
        </th>
        <th>Label</th>
        <th>Delete comment</th>
        <th>Delete all comments</th>
      </tr>
    </thead>
    <tbody>
      {props.sentences.map(input => (
        <tr key={input.index > 0 ? input.index : null}>
          <td>{input.sentence}</td>
          <td>{input.prediction}</td>
          <td>
            <h2>{input.emoji}</h2>
          </td>
          <td>{input.label}</td>

          <td>
            <button
              className="btn btn-danger"
              onClick={() => props.deleteSentence(input.index)}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => props.deleteAll(input.index)}
            >
              Delete all
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ToxicTable;
