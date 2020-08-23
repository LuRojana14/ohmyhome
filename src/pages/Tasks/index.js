import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'


export class Tasks extends Component {
    render() {
        return(
    
        <div>
            <div className="fotoperfil">
                <div className="contenedor-profileImage">
                    <img src="https://www.trofeocaza.com/wp-content/uploads/2018/03/el-oso-pardo-prin-1900x1769_c.jpg" className="fotoperfil" alt="..."/>
                </div>  
                <h4 className="nombre">GRUPO</h4>
                <p className="epigrafe">MIEMBRO 1 - MIEMBRO 2 - MIEMBRO 3</p>
             </div>
            <NavBar/>
        
        </div>
        
        )
    }      
        
}