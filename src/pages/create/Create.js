import React, { useState } from "react";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
  };

  return (
    <div className="create">
      <h2 className="page-title">Create a new recipe</h2>

      <form onSubmit={formSubmitHandler}>
        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (in minutes)</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
