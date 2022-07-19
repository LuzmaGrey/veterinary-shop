import React from "react"
import A from './../../Atoms/A/A';

require('./Footer.css')

function Footer() {
  return <>
    <div className="footer row p-4">
      <div className="col-4 footer__border-div">
        <h2 className="fs-4 mb-3">The Pokémon Company</h2>
        <ul className="list-unstyled">
          <li className="footer__list-item">
            <A aClass="footer__list-link" href="https://www.pokemon.com/el/servicio-de-atencion-al-cliente/">
              Servicio de atención al cliente
            </A>
          </li>
          <li className="footer__list-item">
            <A aClass="footer__list-link" href="https://www.pokemon.com/el/sobre-pokemon/">
              Sobre nuestra compañía
            </A>
          </li>
          <li className="footer__list-item">
            <A aClass="footer__list-link" href="https://www.pokemon.com/el/pais-region/">
              Seleccionar país o región
            </A>
          </li>
        </ul>
      </div>
      <div className="col-4">
        <div className="footer__privacy">
          <div className="d-flex">
            <A className="footer__privacy-img" href="https://www.pokemon.com/el/aviso-sobre-la-privacidad/">
              <img className="footer__privacy-img" src="/images/extras/thepokemoncompanyinternational-seal-1596150491.png" alt="asd" />
            </A>
            <ul className="list-unstyled ms-2">
              <li className="footer__privacy-list-item">
                <A aClass="footer__privacy-link" href="https://www.pokemon.com/el/terminos-de-uso/">Términos de uso</A>
              </li>
              <li className="footer__privacy-list-item">
                <A aClass="footer__privacy-link" href="https://www.pokemon.com/el/aviso-sobre-la-privacidad/">Aviso sobre la privacidad</A>
              </li>
              <li className="footer__privacy-list-item">
                <A aClass="footer__privacy-link" href="https://www.pokemon.com/el/pagina-de-cookies/">Página de Cookies</A>
              </li>
              <li className="footer__privacy-list-item">
                <A aClass="footer__privacy-link" href="https://www.pokemon.com/el/informacion-legal/">Información legal</A>
              </li>
            </ul>
          </div>
          <span>©2021 Pokémon. TM, ®Nintendo.</span>
        </div>
      </div>
    </div>
  </>
}

export default Footer
