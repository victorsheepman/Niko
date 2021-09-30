const Home = () => {
    const view = `
    <section class="container">
                <div class="container__main">
                    <div class="galery">
                        
                        <section class="galery__up">
                            <figure>
                                <img src="assets/images/video 1.jpg" alt="">
                            </figure>
                            <figure>
                                <img src="assets/images/Rectangle 22.jpg" alt="">
                            </figure>
                        </section>
                        <section class="galery__down">
                            <figure>
                                <img src="assets/images/left.jpg" alt="">
                            </figure>
                            <figure>
                                <img src="assets/images/Rectangle 22.jpg" alt="">
                            </figure>
                        </section>
                        
                    </div>
                    <div class="sidebar">
                        <section class="data">
                            <div class="data__title">
                                <h2 class="subtitle-1">Nike Air Force 1 '07</h2>
                                <span class="heavy data__title__price">$1999</span>
                                <p class="body-1">Calzado para hombre</p>
                            </div>
                            <div class="data__shoes">
                                <figure>
                                    <img src="assets/images/data_1.png" alt="">
                                </figure>
                                <figure>
                                    <img src="assets/images/data_2.jpg" alt="">
                                </figure>
                            </div>
                        </section>
                        <section class="sizes">
                            <div class="sizes__title">
                                <h3 class="heavy">Selecciona tu talla</h3>
                                <span class="heavy">Guía de tallas</span>

                            </div>
                            <div class="sizes__size body-1">
                                <div>CM 24 (US 6)</div>
                                <div>CM 24.5</div>
                                <div>CM 25</div>
                                <div>CM 25.5</div>
                                <div>CM 26</div>
                                <div>CM 26.5</div>
                                <div>CM 27</div>
                                <div>CM 27.5</div>
                                <div class="default">CM 28</div>
                                <div class="default">CM 28.5</div>
                                <div class="default">CM 29</div>
                                <div class="default">CM 29.5</div>
                                <div class="default">CM 30</div>
                                <div class="default">CM 30.5</div>
                                <div>CM 31</div>
                            </div>

                        </section>
                        <section class="botons">
                            <button class="botons__btn--black" >
                            <a href="#/car/"> Agregar a la bolsa de compra</a>
                            </button>
                            <button class="botons__btn--white">
                                Favoritos <span><img src="assets/icons/heart.svg" alt="" srcset=""></span>
                            </button>
                        </section>
                        <article class="info">
                            <span class="heavy">Envio</span>
                            <div class="info__body .body-1">
                                <p>Para obtener información de envío precisa<br>
                                   <u> Editar ubicación</u><br>

                                    Básquetbol en el parque, barbacoas y sol de domingo. El resplandor sobrevive con el calzado Nike Air Force 1 ’07, un modelo clásico del básquetbol, este OG le da un toque novedoso al calzado de siempre: impecables capas de cuero con puntadas perfectas, en un blanco clásico con la cantidad perfecta de destellos para que brilles.,<br><br>
                                    
                                    - Color que se muestra: Blanco/Blanco <br>
                                    - Estilo: 315122-111
                                </p>
                               
                            </div> 
                            <a href="/">Ver datos del producto</a>
                        </article>
                    </div>
                </div>
                <section class="tendencia">
                    <h2>PRINCIPALES TENDENCIAS</h2>
                    <div class="tendencia__slider">
                        <div class="card">
                            <figure class="card__img"> 
                                <img src="assets/images/card-1.jpg" alt="">
                            </figure>
                            <div class="card__data">
                                <div class="card__data__title">
                                    <h4 class="heavy">Nike Air Force 1 High ‘07</h4>
                                    <span class="body-1">Calzado para hombre</span>
                                </div>
                                <p>$2899</p>
                            </div>
                        </div>
                        <div class="card">
                            <figure class="card__img"> 
                                <img src="assets/images/card-2.jpg" alt="">
                            </figure>
                            <div class="card__data">
                                <div class="card__data__title">
                                    <h4 class="heavy">Air Jordan 1 Low</h4>
                                    <span class="body-1">Calzado para hombre</span>
                                </div>
                                <p>$2399</p>
                            </div>
                        </div>
                        <div class="card">
                            <figure class="card__img"> 
                                <img src="assets/images/card-3.jpg" alt="">
                            </figure>
                            <div class="card__data">
                                <div class="card__data__title">
                                    <h4 class="heavy">Nike Air Force 1 ‘07 LV8</h4>
                                    <span class="body-1">Calzado para hombre</span>
                                </div>
                                <p>$2199</p>
                            </div>
                        </div>
                        <div class="card">
                            <figure class="card__img"> 
                                <img src="assets/images/card-4.jpg" alt="">
                            </figure>
                            <div class="card__data">
                                <div class="card__data__title">
                                    <h4 class="heavy">Nike Air Force 1 React LX</h4>
                                    <span class="body-1">Calzado para hombre</span>
                                </div>
                                <p>$2899</p>
                            </div>
                        </div>

                    </div>

                </section>
            </section>
    `;
    return view;
}
export default Home;