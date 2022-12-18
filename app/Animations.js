



/**
 * 
 * animation_FadeIn
 * 
 * Ejemplo de animación. Todas las animaciones tienen siempre 3 pasos: 
 *       a. Seleccionamos los elementos a animar
 *       b. Hemos visto que anime se comporta mejor con CSS declarado en el atributo style del HTML
 *          Por lo tanto, si queremos hacer alguna animación, podemos iniciar los valores con anime.set
 *       c. Animamos, con un timeline mejor, para poder concatenar animaciones...
 *       d. Si queremos meter alguna función después de animar podemos meter el callback complete o usar promesas...
 * 
 * 
 */
const animation_FadeIn = (getTo) => {
    // Selecciona elementos a animar
    const el = GAME_UI.app.querySelector(getTo);
    const title = el.querySelector('h1');

    // Necesitas meter algo de CSS antes de la animación??
    anime.set(el, {
        visibility: 'visible',
        opacity: 0
    });
    anime.set(title, {
        opacity: 0,
        translateY: 50
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutSine'
    });

    animation_layout
        .add({
            targets: [el],
            opacity: 1
        })
        .add({
            targets: [title],
            opacity: 1, 
            translateY: 0
        }, '-=200');
};


/**
 * El resto de animaciones las construyes tú. 
 * Recuerda que puedes guardar las animaciones del layout
 * en la variable global animation
 */
const animation_SplashToMenu = (getTo) => {
    // Selecciona elementos a animar
    const from = GAME_UI.app.querySelector(GAME_UI.state.navigationStage);
    const to = GAME_UI.app.querySelector(getTo);
    
    // Necesitas meter algo de CSS antes de la animación??
    anime.set(to, {
        visibility: 'visible', 
        translateY: '100%', 
        opacity: 0
    });

    // Anima!
    animation_layout = anime.timeline({
        duration: 750,
        easing: 'easeInOutSine'
    });
    animation_layout
        .add({
            targets: [from], 
            translateY: '-100%', 
            opacity: 0
        })
        .add({
            targets: [to], 
            translateY: 0, 
            opacity: 1
        }, '-=750')
};

const animation_MenuToGame = (getTo) => {
    // Selecciona elementos a animar
    const from = GAME_UI.app.querySelector(GAME_UI.state.navigationStage);
    const to = GAME_UI.app.querySelector(getTo);
    
    // Necesitas meter algo de CSS antes de la animación??
    anime.set(to, {
        visibility: 'visible', 
        translateY: '100%', 
        opacity: 0
    });
    // Anima!
    animation_layout = anime.timeline({
        duration: 500,
        easing: 'easeInOutSine'
    });
    animation_layout
        .add({
            targets: [from],
            translateY: '-100%',
            opacity: 0
        })
        .add({
            targets: [to],
            translateY: 0,
            opacity: 1
        }, '-=750')

};

const animation_MainToMenu = (getTo) => {
    const from = document.querySelector('#main_page');
    const to = document.querySelector('#swiper_page');
  
    anime.set(to, {
      visibility: 'visible',
      translateY: '100%',
      opacity: 0
    });
    animation_layout = anime.timeline({
      duration: 750,
      easing: 'easeInOutSine'
    });
  
    animation_layout
      .add({
        targets: [from],
        translateY: '-100%',
        opacity: 0
      })
      .add({
        targets: [to],
        translateY: '0%',
        opacity: 1
      }, '-=750');
  
    animation_layout.finished.then(() => {
      anime.set(from, {
        visibility: 'hidden'
      });
      game.ended = True;
      document.querySelector('.game').innerHTML = '';
    });
  };

/**
 * 
 * Ejemplo de un popup, como vemos, es lo mismo....
 */
const animation_PopupPause = (getTo) => {
    const popup = GAME_UI.app.querySelector(getTo);

    anime.set(popup, {
        translateY: '20%', 
        opacity: 0, 
        visibility: 'visible'
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeOutQuad'
    });

    animation_layout.add({
        targets: popup,
        translateY: '0%',
        opacity: 1
    });
};

const animation_PopupContinue = (getTo) => {
    const popup = GAME_UI.app.querySelector('#modal_pause_window');
  
    animation_layout = anime.timeline({
      duration: 300,
      easing: 'easeOutQuad'
    });
  
    animation_layout.add({
      targets: [popup],
      translateY: '-20%',
      opacity: 0
    });
  
    animation_layout.finished.then(() => {
      game.pauseOrResume();
      anime.set(popup, {
        visibility: 'hidden'
      })
    });
  };
  
const animation_ConfirmIn = (getTo) => {
    const popup = GAME_UI.app.querySelector('#modal_confirm');
  
    anime.set(popup, {
        translateY: '-20%',
        opacity: 0,
        visibility: 'visible'
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeOutQuad'
    });

    animation_layout.add({
        targets: popup,
        translateY: '0%',
        opacity: 1
    });
    };

const animation_ConfirmOut = (getTo) => {
    const popup = GAME_UI.app.querySelector('#modal_confirm');

    anime.set(popup, {
        translateY: '0%', 
        opacity: 1, 
        visibility: 'visible'
    });

    animation_layout = anime.timeline({
        duration: 300,
        easing: 'easeOutQuad'
    });

    animation_layout.add({
        targets: popup,
        translateY: '20%',
        opacity: 0
    });
}

const player = document.getElementById('player');



player.addEventListener('dragstart', (event) => {
  // Almacenar la posición del mouse al iniciar el arrastre
  event.dataTransfer.setData('mouseX', event.clientX);
  event.dataTransfer.setData('mouseY', event.clientY);
});

player.addEventListener('drag', (event) => {
  // Actualizar la posición del player en función de la posición del mouse durante el arrastre
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  player.style.left = `${mouseX}px`;
  player.style.top = `${mouseY}px`;
});

player.addEventListener('dragend', (event) => {
  // Almacenar la posición final del player al soltar el elemento
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  player.style.left = `${mouseX}px`;
  player.style.top = `${mouseY}px`;
});
