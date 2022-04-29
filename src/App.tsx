import { useCallback, useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './Components/LoginBox'
import { MessageList } from './Components/MessageList'
import { SendMessageForm} from './Components/SendMessageForm'
import { AuthContext } from './contexts/auth'

export function App() {
  const{user} =useContext(AuthContext)

  return (
    <main className={`${styles.contentWrapper} ${!!user?styles.contentSigned:''}`}>
      <MessageList />
     {!! user ? <SendMessageForm/>: <LoginBox/>}
    </main >
  )
}
