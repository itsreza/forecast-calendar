import React from "react";
import classes from "./index.module.scss";
export default function EmptyEvent({ date }) {
  const separatedDate = date?.toString().split("/");

  return (
    <div className={classes.root}>
      <span>There's No Event For This Day, Let's Create Now.</span>
      <div className={classes.date}>
        <span>{separatedDate?.[1]}</span>
        <span>{separatedDate?.[2]}</span>
        <span>{separatedDate?.[0]}</span>
      </div>
    </div>
  );
}
