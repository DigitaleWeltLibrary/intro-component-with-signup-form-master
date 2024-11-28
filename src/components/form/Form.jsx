import React, { useState } from "react";
import Infobox from "../infobox/Infobox";
import style from "./main.module.scss";
import errorimg from "./../../assets/icon-error.svg";

export default function Form() {
  const [errorarr, seterror] = useState([]);

  const checkvalue = (input, fieldname) => {
    if (!input.value.trim()) return fieldname;
    return null;
  };

  function submit(e) {
    e.preventDefault();
    let errors = [];

    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const fields = [
      { input: firstname, name: "firstname" },
      { input: lastname, name: "lastname" },
      { input: email, name: "email" },
      { input: password, name: "password" },
    ];

    fields.forEach(({ input, name }) => {
      let error = checkvalue(input, name);
      if (error) errors.push(error);
    });

    seterror(errors);

    if (errors.length === 0) {
      alert("Message gesendet");
    }
  }

  return (
    <article>
      <Infobox />
      <form className={style.form}>
        <section>
          <input
            className={errorarr.includes("firstname") && style.error}
            type="text"
            id="firstname"
            placeholder="First Name"
          />
          {errorarr.includes("firstname") && (
            <>
              <img src={errorimg} alt="error" />
              <p>Input is empty.</p>
            </>
          )}
        </section>
        <section>
          <input
            className={errorarr.includes("lastname") && style.error}
            type="text"
            id="lastname"
            placeholder="Last Name"
          />
          {errorarr.includes("lastname") && (
            <>
              <img src={errorimg} alt="error" />
              <p>Input is empty.</p>
            </>
          )}
        </section>
        <section>
          <input
            className={errorarr.includes("email") && style.error}
            type="email"
            id="email"
            placeholder="Email Address"
          />
          {errorarr.includes("email") && (
            <>
              <img src={errorimg} alt="error" />
              <p>Input is empty.</p>
            </>
          )}
        </section>
        <section>
          <input
            className={errorarr.includes("password") && style.error}
            type="password"
            id="password"
            placeholder="Password"
          />
          {errorarr.includes("password") && (
            <>
              <img src={errorimg} alt="error" />
              <p>Input is empty.</p>
            </>
          )}
        </section>

        <button onClick={(e) => submit(e)} className={style.submit}>
          Claim your free trial
        </button>
        <p>
          By clicking the button, you are agreeing to our
          <a href="#"> Terms and Services</a>
        </p>
      </form>
    </article>
  );
}
