import React, { Component } from 'react'
import logoWhite from '../images/invie-white.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="contenedor">
          <div className="contacto">
            <img src={ logoWhite } alt="logotipo blanco"/>
            <a href="tel:+573024456678"><strong>Telefono</strong><span>3024456678</span></a>
            <a href="mailto:contacto@invie.com"><strong>E-mail</strong><span></span>contacto@invie.com</a>
          </div>
          <form className="formulario">
            <div className="col1">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" required id="nombre" name="nombre"/>
              <label htmlFor="email">E-mail</label>
              <input type="email" required id="email" name="email"/>
              <div className="sexo">
                <label htmlFor="mujer">
                  <input type="radio" defaultChecked id="mujer" name="sexo" value="mujer" /> Mujer
                </label>
                <label htmlFor="hombre">
                  <input type="radio" id="hombre" name="sexo" value="mombre" /> Hombre
                </label>
              </div>
              <div className="intereses">
                <label htmlFor="cotizacion">
                  <input type="checkbox" defaultChecked id="cotizacion" name="intereses" value="cotizacion" /> Cotización
                </label>
                <label htmlFor="reclamos">
                  <input type="checkbox" id="reclamos" name="intereses" value="reclamos" /> Reclamos
                </label>
                <label htmlFor="comentarios">
                  <input type="checkbox" id="comentarios" name="intereses" value="comentarios" /> Comentarios
                </label>
                <label htmlFor="otros">
                  <input type="checkbox" id="otros" name="intereses" value="otros" /> Otros
                </label>
              </div>
            </div>
            <div className="col2">
              <label htmlFor="asunto">Comentarios</label>
              <textarea name="asunto" id="asunto" rows="7" cols="30"></textarea>
              <input type="submit" name="" value="Enviar" className="button"/>
            </div>
          </form>
        </div>
      </footer>
    )
  }
}

export default Footer
