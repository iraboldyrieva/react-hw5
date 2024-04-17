import React, { useReducer } from "react";

const initials = {
  name: "",
  lastName: "",
  birthYear: "",
  displayedName: "",
  displayedLastName: "",
  displayedBirthYear: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setBirthYear":
      return { ...state, birthYear: action.payload };
    case "display":
      return { ...state, [action.key]: state[action.field] };
    default:
      return state;
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initials);

  const handleChange = (field) => (event) => {
    dispatch({ type: `set${field}`, payload: event.target.value });
  };

  const handleDisplay = (field, key) => {
    dispatch({ type: "display", field, key });
  };

  return (
    <div>
      <h2>useReducer:</h2>
      <input value={state.name} onChange={handleChange("Name")} />
      <button onClick={() => handleDisplay("name", "displayedName")}>
        Name
      </button>
      <p>Name: {state.displayedName}</p>
      <input value={state.lastName} onChange={handleChange("LastName")} />
      <button onClick={() => handleDisplay("lastName", "displayedLastName")}>
        Last Name
      </button>
      <p>Last Name: {state.displayedLastName}</p>
      <input value={state.birthYear} onChange={handleChange("BirthYear")} />
      <button onClick={() => handleDisplay("birthYear", "displayedBirthYear")}>
        Birth Year
      </button>
      <p>Birth Year: {state.displayedBirthYear}</p>
    </div>
  );
}
