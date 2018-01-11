/**
 * @license
 * Copyright (c) 2017 Nicolai Schmid. All rights reserved.
 * The name Nicolai Schmid may not
 * be used to endorse or promote products derived from
 * this software without specific prior written permission.
 */

// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';

        // Create the initial position
        this.reset();

        // The width of the sprite image
        this.sizeX = 66;
    }

    update() {

    }

    reset() {
        // The absolute pixel coordinates [x, y]
        this.coordinates = [];

        // The coordinates based on the 5 x 6 grid
        this.x = Math.floor(Math.random() * 4);
        this.y = 5;
    }

    render() {
        // Coverts the x and y coordinates to pixel and renders the image to the canvas
        this.coordinates = [this.x * 100, (this.y * 80) - 30];
        ctx.drawImage(Resources.get(this.sprite), ...this.coordinates);
    }

    // Handles the keyboard inputs
    handleInput(key) {
        switch (key) {
            case 'up': {
                if (this.y != 0) {
                    this.y--;
                }
                break;
            }
            case 'down': {
                if (this.y != 5) {
                    this.y++;
                }
                break;
            }
            case 'left': {
                if (this.x != 0) {
                    this.x--;
                }
                break;
            }
            case 'right': {
                if (this.x != 4) {
                    this.x++;
                }
                break;
            }
        }
    }
}


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
