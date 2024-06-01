import './app.scss'
import 'simple-notify/dist/simple-notify.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
