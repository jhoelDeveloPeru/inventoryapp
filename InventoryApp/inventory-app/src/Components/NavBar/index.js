import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';
import logo from '../../Assets/img/logo.svg'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
          <img src={logo} alt='logo' width="30px" height="30px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/RegistroVenta'>
            Registrar Venta
          </NavLink>
          <NavLink to='/RegistroProducto'>
            Registrar Producto
          </NavLink>
          <NavLink to='/ReporteVenta'>
            Reporte venta
          </NavLink>
          <NavLink to='/RegistroUsuario'>
           Registrar Usuario
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Salir</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;