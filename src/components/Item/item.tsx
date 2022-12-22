import { HTMLAttributes } from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props extends HTMLAttributes<HTMLElement> { }

export const Item = (props: Props) => {
  return (
    <div className={classNames({
      [styles.item]: true,
      [`${props.className}`]: true
    })}>
      {props.children}
    </div>
  )
}

export const ItemComBtn = (props: Props) => {
  return (
    <div className={classNames({
      [styles.container]: true,
      [`${props.className}`]: true
    })}>
      <Item className={styles.itemBtn} >{props.children}</Item>
      <button
        className={styles.iconBtn}
        onClick={props.onClick}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  )
}