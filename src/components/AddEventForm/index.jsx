import React from 'react'
import TextField from '../TextField'

export default function AddEventForm({onBlur}) {
  return (
    <>
    <TextField name="title" onBlur={onBlur} label="title" />
    <TextField name="description" onBlur={onBlur}  label="description" />
    </>
  )
}
