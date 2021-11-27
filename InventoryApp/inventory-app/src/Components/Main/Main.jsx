import React from 'react'
import Navbar from '../NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroVenta from '../../Pages/RegistroVenta/RegistroVenta'
import RegistroProducto from '../../Pages/RegistroProducto/RegistroProducto'
import ReporteVenta from '../../Pages/ReporteVenta/ReporteVenta';
import Login from '../../Login/Login';
import Home from '../../Pages/Home/Home'
export default function Main() {
    return (
        <div className="master">
            <Router>
                <Switch>
                    <Route path='/home' exact render={() => {
                        return <div> <Navbar /> <Home/></div>
                    }} />
                    <Route path='/RegistroVenta' exact render={() => {
                        return <div> <Navbar /> <RegistroVenta/></div>
                    }} />
                    <Route path='/RegistroProducto' exact render={() => {
                        return <div> <Navbar /> <RegistroProducto/></div>
                    }} />
                    <Route path='/ReporteVenta' exact render={() => {
                        return <div> <Navbar /> <ReporteVenta/></div>
                    }} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>

    )
}