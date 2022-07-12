import React from 'react'
import { useDispatch } from 'react-redux'
import { removeEventRequested } from '../../store/actions/eventActions'

export default function EventItem({title , description , id}) {

const dispatch = useDispatch()

const onRemove = () => dispatch(removeEventRequested(id))

  return (
    <div>
        <div>{title}</div>
        <div>{description}</div>
        <button onClick={onRemove}>removeEventRequested(key)</button>
        </div>
  )
}
