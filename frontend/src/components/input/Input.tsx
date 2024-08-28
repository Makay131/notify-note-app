import React from 'react'
import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ElementType;
}

export default function BaseInput(props: InputProps) {
  const { icon: Icon, ...restProps } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles["icon-container"]}>
        <Icon className={styles.icon} />
      </div>
      <input {...restProps} className={styles.input} />
    </div>
  )
}