import React from "react";
import style from "./main.module.scss";

export default function Infobox() {
  return (
    <section className={style.section}>
      <p>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </p>
    </section>
  );
}
