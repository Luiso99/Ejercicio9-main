
/**
 * Consts and state
 */

let game;
const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/img/malo.png",
    OPPONENT_PICTURE_DEAD = "assets/img/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/img/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/img/bueno.png",
    PLAYER_PICTURE_DEAD = "assets/img/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/img/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/img/shot2.png",
    SHOT_WIDTH = 1.5,

    GAME_UI = {
        app: document.querySelector('#app'),
        gameBoard: document.querySelector('.game'),
        pages: {
            splash: document.querySelector('#splash_page'),
            menu: document.querySelector('#menu_page'),
            main: document.querySelector('#main_page'),
            settings: document.querySelector('#settings_page'),
            leaderboard: document.querySelector('#leaderboard_page')
        },
        modalWindows: {
            pause: document.querySelector('#modal_pause_window'),
            confirm: document.querySelector('#modal_confirm'),
            spinner: document.querySelector('#modal_loading_spinner')
        },
        state: {
            navigationStage: '',
            playing: false,
            paused: false,
            spinning: false
        }
    };







/**
 * loading scripts
 */

window.addEventListener('load', () => {
    initNavigation();
    initUI();
    navigationTo('#splash_page', 'fade_in');
});
