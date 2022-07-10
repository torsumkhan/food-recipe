import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIng, setNewIng] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const history = useHistory();

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIng.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
    setNewIng("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

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
          <span>Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              value={newIng}
              onChange={(e) => setNewIng(e.target.value)}
              ref={ingredientInput}
            />
            <button className="ing-btn" onClick={handleAdd}>
              Add Ingredients
            </button>
          </div>
        </label>

        <p>
          {ingredients.map((items) => (
            <em key={items}>{items}, </em>
          ))}
        </p>

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
