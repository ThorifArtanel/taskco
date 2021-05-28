import React from 'react';

const Input = (props) => {
  return(
    <input
      className = { props.className || "default-input" }
      id = { props.id }
      name = { props.name }
      type = { props.type }
      value = { props.value || ""}
      style = { props.style }
      onClick = { props.action }
      onChange = { props.onChange }
      onInput = { props.onInput }
      placeholder = { props.placeholder }
      readOnly = { props.readOnly }
      defaultValue = { props.defaultValue }
    >
      { props.title }
    </input>
  )
}

export default Input;