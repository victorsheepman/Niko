const Footer = ()=>{
    const view = `
    <footer class="footer">
    <div class="footer__content">
        <ul class="footer__options heavy">
            <li>BUSCAR TIENDA</li>
            <li>REGÍSTRATE PARA RECIBIR CORREOS</li>
            <li>ELECTRÓNICOS</li>
            <li>HAZTE MIEMBRO</li>
            <li>ENVÍANOS TUS COMENTARIOS</li>
        </ul>
        <ul class="footer__help body-1">
            <li class="heavy">OBTENER AYUDA</li>
            <li>Estado del pedido</li>
            <li>Envío y entrega</li>
            <li>Devoluciones</li>
            <li>Opciones de pago</li>
            <li>Comunícate con nosotros</li>
        </ul>
        <ul class="footer__about body-1">
            <li class="heavy">ACERCA DE NIKE</li>
            <li>Noticias</li>
            <li>Empleo</li>
            <li>Inversionistas</li>
            <li>Sostenibilidad</li>
        </ul>
    </div>
    <div class="footer__icons">
        <figure>
            <img src="assets/icons/twitter.svg" alt="">
        </figure>
        <figure>
            <img src="assets/icons/facebook.svg" alt="">
        </figure>
        <figure>
            <img src="assets/icons/youtube.svg" alt="">
        </figure>
        <figure>
            <img src="assets/icons/instagram.svg" alt="">
        </figure>
    </div>
</footer>
    `;
    return view;
}
export default Footer;