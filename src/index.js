import { h, render } from '@/src/libs/preact/src'

import '@/src/styles/global.scss'

import App from './App'

render(<App />, document.querySelector('#root'))
