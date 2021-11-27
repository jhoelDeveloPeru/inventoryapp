import React, { useState } from 'react'
import './Login.css'
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Main from '../Components/Main/Main'
import axios from 'axios'
import { initAxiosInterceptors, setToken } from '../Helpers/auth-helpers'

initAxiosInterceptors()

export default function Login() {
    const CLIENT_ID = "ASIARMHGFHNGKWE7IKY4"
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    async function signin() {
        try {

            const data = await axios.post('https://inventoryapis.azurewebsites.net/api/login/autenticar',
                {
                    "ClientId": CLIENT_ID,
                    "Username": user,
                    "Password": password
                }
            )
            if (data == undefined) {
                alert('Usuario y/o clave incorrectos')
                return
            }
            if (data.data.IsUserValid) {
                setToken(data.data.Token)
                window.location.replace("/home")
            }
        } catch (error) {
            //window.location.replace("/home")
            alert(error)
        }
    }
    return <div>
        <Router>
            <Route path="/" exact render={() => {
                return <div className="bg"><div className="contenedor card-cantainer">
                    <div className="card">
                        <div className="form-login">
                            <div className="title">Iniciar Sesión</div>
                            <input type="text" placeholder="Usuario" value={user} className="input-form" onChange={(e) => setUser(e.target.value)}></input>
                            <input type="password" placeholder="Clave" value={password} className="input-form" onChange={(e) => setPassword(e.target.value)}></input>
                            <input type="button" value="Ingresar" className="button-form" onClick={signin}></input>
                        </div>
                    </div>
                </div></div>
            }}>
            </Route>
            <Route path="/login" exact render={() => {
                return <div className="bg"><div className="contenedor card-cantainer">
                    <div className="card">
                        <div className="form-login">
                            <div className="title">Iniciar Sesión</div>
                            <input type="text" placeholder="Usuario" value={user} className="input-form" onChange={(e) => setUser(e.target.value)}></input>
                            <input type="password" placeholder="Clave" value={password} className="input-form" onChange={(e) => setPassword(e.target.value)}></input>
                            <input type="button" value="Ingresar" className="button-form" onClick={signin}></input>
                        </div>
                    </div>
                </div></div>
            }}>
            </Route>
            <Route path="/home" exact component={Main}></Route>
        </Router>
    </div>
}