import { h, Fragment } from '@/src/libs/preact/src/index'
import { useState, useEffect, useRef } from '@/src/libs/preact/hooks/src'
import Button from '@/src/components/Button'
import Select from '@/src/components/Select'
import Input from '@/src/components/Input'

const Form = () => {
  debugger
  const [state, setState] = useState(1)
  const btnRef = useRef(null)
  const numberRef = useRef(1)
  const onClick = e => {
    numberRef.current++

    setState(p => {
      return p + 1
    })
  }

  useEffect(() => {
    console.log(numberRef?.current)
  }, [numberRef?.current])

  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <>
      <div className='container'>
        dsddas
        <div>div dasdads {state}</div>
        <Button mainTheam='green' onClick={onClick} ref={btnRef} text='Btn text' />
        <Select
          options={[
            { value: 'dasdasda', name: 'dsdasds' },
            { value: '111', name: 'ds111dasds' },
            { value: 'dasd222asda', name: 'dsd3211asds' },
            { value: 'dasda222sda', name: 'dsda223sds' },
          ]}
        />
        <div>
          <Input />
        </div>
      </div>
    </>
  )
}

export default Form
