import { h, Fragment } from '@/src/libs/preact/src'

import style from './Button.module.scss'

import cn from 'classnames'

const Button = ({
  isLink = false,
  disabled = false,
  styleInline = null,
  btnRef = null,
  type = null,
  img = null,
  text = null,
  arrow = false,
  mainTheam = null,
  mainColor = null,
  circle = false,
  mini = false,
  onClick = () => {},
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      style={styleInline}
      onClick={onClick}
      ref={btnRef}
      {...props}
      className={cn(
        style.button,
        {
          [style[mainTheam]]: mainTheam,
          [style[`color-${mainColor}`]]: mainColor,
          [style.circle]: circle,
          [style.mini]: mini,
        },
        className
      )}
    >
      <div className={`${style.contentWrapper} ${img && text ? style.img : ''}`}>
        {!!img && img()}
        <span>{text}</span>
        {!!arrow && <span className={style.arrow}>{/* <ArrowSvg /> */}</span>}
      </div>
    </button>
  )
}

export default Button
