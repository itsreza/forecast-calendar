import React from "react";
import { Grid, Skeleton } from "@mui/material";
import classes from "./index.module.scss";
export default function Loading() {
  return (
    <>
      <Skeleton className={classes.title_loading} variant="text" />
      <div className={classes.card_loading}>
        <Skeleton variant="rectangular" height="100px" />
        <Skeleton variant="rectangular" height="100px" />
      </div>
    </>
  );
}
