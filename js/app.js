/**
 * @license
 * Copyright (c) 2017 Nicolai Schmid. All rights reserved.
 * The name Nicolai Schmid may not
 * be used to endorse or promote products derived from
 * this software without specific prior written permission.
 */



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player();
const allEnemies = [
    new Enemy(1),
    new Enemy(1),
    new Enemy(2),
    new Enemy(2),
    new Enemy(3),
    new Enemy(3),
];

/**
 * @description This listens for key presses and sends the keys to the Player.handleInput() method.
 * @license This snippet was provided by udacity
 */
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
