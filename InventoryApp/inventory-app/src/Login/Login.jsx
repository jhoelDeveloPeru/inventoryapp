import React from 'react'
import './Login.css'
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Main from '../Components/Main/Main'

export default function Login() {
    return <div>
        <Router>
            <Route path="/login" exact render={() => {
                return <div className="bg"><div className="contenedor card-cantainer">
                    <div className="card">
                        <div className="form-login">
                            <div className="title">Iniciar Sesión</div>
                            <input type="text" placeholder="Usuario" className="input-form"></input>
                            <input type="password" placeholder="Clave" className="input-form"></input>
                            <Link to="/home"><input type="button" value="Ingresar" className="button-form"></input>
                            </Link>
                        </div>
                    </div>
                </div></div>
            }}>
            </Route>
            <Route path="/home" exact component={Main}></Route>
        </Router>
    </div>
}