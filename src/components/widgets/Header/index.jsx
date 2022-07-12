import React from 'react'
import classes from "./index.module.scss"
export default function Header() {
  return (
    <div className={classes.header_container}>
    <span className={classes.logo}>
    <img src="https://snapp.market/favicon.ico" alt="SnappMarket!" />
    </span>
    </div>
  )
}
