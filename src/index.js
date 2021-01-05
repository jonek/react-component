import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, className }) => {
  return (
    <div className={`${styles.test} ${className}`}>
      My React Example Component: {text}
    </div>
  )
}
