import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;
  const [name, setName] = useState(currentUser.name || "");
  const [aboutMe, setAboutMe] = useState(currentUser.about || "");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAboutMe(currentUser.about || "");
    }
  }, [currentUser]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAboutMeChange = (event) => {
    setAboutMe(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: aboutMe });
  };
  return (
    <form className=" form" onSubmit={handleSubmit}>
      <input
        className="form__input form__input_name"
        type="text"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        name="name"
        value={name ?? ""}
        onChange={handleNameChange}
        required
      />
      <span className="form__input-error"></span>
      <input
        className="form__input form__input_about"
        type="text"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        name="about"
        value={aboutMe ?? ""}
        onChange={handleAboutMeChange}
        required
      />
      <span className="form__input-error"></span>
      <button type="submit" className="form__submit">
        Guardar
      </button>
      <div className="loader" id="loader">
        <div className="loader__id" id="loader__circle"></div>
      </div>
    </form>
  );
}
