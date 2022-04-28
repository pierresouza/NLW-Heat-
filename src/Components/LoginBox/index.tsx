import { VscGithubInverted } from 'react-icons/vsc'

import styles from './styles.module.scss'

export function LoginBox() {
  const singInUrl = `https//github.com.login/oauth/authorize?scope=user&client_id=0d0cba319108d996d68a`

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>
        Entre e compartilhe sua mensagem
      </strong>
      <a href={singInUrl} className={styles.signInWithGithub} >
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  )
}