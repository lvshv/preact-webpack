import { h, Fragment } from '@/src/libs/preact/src/index'

import cn from 'classnames'
import Button from '@/src/components/Button'
// import IconCross from "public/img/icons/iconCrossBold.svg";
import style from './Input.module.scss'

const Input = ({
  value = '',
  label = null,
  placeholder = null,
  error = null,
  onChange = () => {},
  onBlur = () => {},
  onEnter = () => {},
  iconLeft = null,
  iconRight = null,
  message = null,
  maxLength = 200,
  autoFocus = false,
  inputMode = 'text',
  isClearable = false,
  min = null,
  max = null,
  prefix = '',
  className = '',
  type = 'text',
}) => {
  const handlerBlurInput = e => {
    const value = e.target.value
    onBlur(value)
  }

  const handlerKey = e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      // const value = e.target.value;
      onEnter(e)
    }
  }

  return (
    <div className={style.inputWrapper}>
      {label && (
        <label className={style.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div>
        {iconLeft && <img></img>}
        {prefix && <span className={style.prefix}>{prefix}</span>}
        <input
          inputMode={inputMode}
          autoFocus={autoFocus}
          id={label}
          maxLength={maxLength}
          className={cn(style.input, {
            [className]: className,
            [style.withPrefix]: prefix,
            [style.error]: error,
          })}
          value={value}
          onChange={onChange}
          onBlur={handlerBlurInput}
          onKeyPress={handlerKey}
          placeholder={placeholder}
          autoComplete='off'
          type={type}
        />
        {iconRight && <img></img>}
        {isClearable && (
          <Button
            mainTheam='ghost'
            mini={true}
            // img={() => <IconCross />}
            className={style.clearButton}
            onClick={() => {
              if (min || min === 0) {
                onChange({ target: { value: min || 0 } })
                handlerBlurInput({ target: { value: min || 0 } })
              }
              if (max) {
                onChange({ target: { value: max || 0 } })
                handlerBlurInput({ target: { value: max || 0 } })
              }
            }}
          />
        )}
      </div>
      {message && (
        <span
          className={cn(style.message, {
            [style.errorMessage]: !!error,
          })}
        >
          {message}
        </span>
      )}
    </div>
  )
}

export default Input
