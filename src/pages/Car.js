const Car = ()=>{
    const view = `
    <section class="car" id="#/car/">
                <div class="car__data">
                    <div class="car__data__title">
                        <h2 class="subtitle-1">Envío gratuito para miembros.</h2>
                        <span class="body-1">Hazte miembro de Nike para disfrutar de envíos rápidos y gratuitos. <u>Únete</u> o <u>Iniciar</u> sesión</span>
                    </div>
                    <article class="car__data__buy">
                        <h3 class="subtitle-1">Bolsa de compra</h3>
                        <div class="car__data__buy--grid">
                            <figure>
                                <img src="assets/images/Rectangle 22.jpg" alt="">
                            </figure>
                            <article class="car__data__buy__info">
                                <h4 class="heavy">Nike Air Force 1</h4>
                                <p class="body-1">
                                    Calzado para hombre <br>
                                    Blanco/Blanco <br>
                                </p>
                                <span class="body-1">Talla 30.5 Cantidad 1</span>
                            </article>
                            <span class="car__data__buy__enlaces"><u>Mover a favoritos</u> <u>Eliminar</u></span>
                        </div>
                    </article>
                </div>
                <div class="car__resumen">
                    <h2 class="subtitle-1">Resumen</h2>
                    <span class="car__resumen__price">
                        <p>Subtotal</p>
                        <p>$1999.00</p>
                    </span>
                    <span class="car__resumen__price">
                        <p>Gastos de envío y gestión estimados</p>
                        <p>$0.00</p>
                    </span>
                    <span class="car__resumen__price--total">
                        <p>Total</p>
                        <p>$1999.00</p>
                    </span>
                    <section class="car__resumen__buttons">
                        <button class="car__resumen__buttons__btn">Comprar como invitado</button>
                        <button class="car__resumen__buttons__btn">Comprar como miembro</button>
                        <button class="car__resumen__buttons__btn--paypal">Paypal</button>
                    </section>
                </div>
                <div class="car__extra">
                    <section class="car__extra__top">
                        <span>
                            <p class="heavy">Envio</p>
                            <p class="body-1">Llega el lun. 18 de ene.</p>
                        </span>
                    </section>
                    <section class="car__extra__bottom">
                        <span>
                            <h3 class="Headline-1">Favoritos</h3>
                            <p class="body-1">¿Quieres ver tus favoritos? <strong><u>Unete</u></strong> o <strong><u>Iniciar sesión</u></strong></p>
                        </span>
                    </section>
                </div>
                <p class="car__p">$1999.00</p>
            </section>
    `;
    return view;
}
export default Car;