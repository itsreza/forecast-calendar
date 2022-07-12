import React from 'react'
import MaterialButton from '@mui/material/Button';

export default function Button({children , variant = "contained" , onClick}) {
  return (
    <MaterialButton onClick={onClick} variant={variant}>{children}</MaterialButton>
  )
}
