import Logo from './Imagens/slogan.png'
import { useState } from'react'
import './styles.css'
function App() {
  const [email,setEmail]= useState("")
  const[password,setPassword]= useState("")
  return (
    <div className="container">
        <form className="conteudo">
          <span className="logo">
            <img src={Logo} alt="logo" />
          </span>
          <div className="wrap-input">
            <input className={email !=="" ? 'has-val input': 'input'}  type="email" name="email" id="email"  value={email} onChange={e => setEmail(e.target.value)}/>
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input className={email !=="" ? 'has-val input': 'input'}  type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <span className="focus-input" data-placeholder="Password"></span>
          </div>
          <button className="bnt-login">Login</button>
          <br />
          <br />
          <div className="conta">
            <span className="sem-conta">Não possui conta? <a href="#">Cadastre-se</a></span>
          </div>
        </form>
      </div>
  )
}

export default App;
