const Header = ()=>{
    const view = `
        <header class="Header">
            <figure class="Header__logo">
               <a href="/"><img src="assets/icons/logo.svg" alt=""></a>
            </figure>
            <nav class="Header__nav .button">
                <ul >
                    <li>Nuevos lanzamientos</li>
                    <li>Regalos</li>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Niño/a</li>
                    <li>Rebajas</li>
                    <li>SNKRS</li>
                </ul>
            </nav>
            <div class="Header__actions">
                <div class="Header__input">
                    <img src="assets/icons/lupa.svg" alt="">
                    <input type="text" class="Header__search" placeholder="Search">
                </div>
                <img src="assets/icons/heart.svg" alt="">
                <img src="assets/icons/car.svg" alt="">
            </div>     
        </header>
    `;
    return view;
}
export default Header;