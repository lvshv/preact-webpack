import { h, Fragment } from '@/src/libs/preact/src'

import { useState, useEffect, useCallback, useRef } from '@/src/libs/preact/hooks/src'
import cn from 'classnames'
import IconCheckBig from '@/public/img/icons/iconCheckBig.svg'
import IconArrowFull from '@/public/img/icons/iconArrowFull.svg'
import style from './Select.module.scss'

const Select = ({ type, placeholder, label = null, reset, defaultValue = null, options, onChange, error }) => {
  const elRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const handler = (e, { name, value }) => {
    onChange({ name: type, value })
    setValue(value)
    setName(name)
  }

  useEffect(() => {
    if (reset) {
      setValue('')
    }
  }, [reset])

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handlerClose)
      return () => {
        document.removeEventListener('click', handlerClose)
      }
    }
  }, [open])

  const handlerClose = useCallback(e => {
    if (elRef.current && !elRef.current.contains(e.target)) {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (!!defaultValue) {
      setValue(defaultValue)
      const name = options.find(option => option.value == defaultValue)
      setName(name?.name)
    }
  }, [defaultValue, options])

  return (
    <div
      className={cn(style.selectWrapper, {
        [style.error]: error,
      })}
    >
      <label className={style.label}>{label}</label>

      <div className={cn(style.select, { [style.active]: open })} ref={elRef} onClick={() => setOpen(p => !p)}>
        <input
          className={style.input}
          type='text'
          placeholder={!value ? placeholder : ''}
          value={value ? name : ''}
          readOnly
        />
        {/* <IconArrowFull className={cn(style.iconArrowFull, { [style.active]: open })} /> */}
      </div>

      {open && (
        <div className={style.options}>
          {options.map((option, idx) => (
            <div className={style.option} key={idx} onClick={e => handler(e, option)}>
              <div className={`${style.text} ${option.value == value ? style.active : ''}`}>{option.name}</div>
              {/* {option.value == value && <IconCheckBig className={style.icon} />} */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
