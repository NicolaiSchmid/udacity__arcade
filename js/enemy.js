/**
 * @license
 * Copyright (c) 2017 Nicolai Schmid. All rights reserved.
 * The name Nicolai Schmid may not
 * be used to endorse or promote products derived from
 * this software without specific prior written permission.
 */

class Enemy extends Character {
    /**
     * @param {Number} lane The lane on which the enemy will be placed, random if omitted
     */
    constructor(lane = Math.floor(Math.random() * 3) + 1) {
        super();
        this.sprite = 'images/enemy-bug.png';

        // Create the initial position
        this.reset(lane);

        // The width of the sprite image
        this.sizeX = 97;
    }

    reset(lane) {
        // The absolute pixel coordinates [x, y]
        this.coordinates = [];

        // The speed of the enemies right movement
        this.speed = 1 + Math.random() * 3;

        // The coordinates based on the 5 x 6 grid
        this.x = -1;
        if (lane) {
            this.y = lane;
        }
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        this.x += dt * this.speed;

        // Reset to left of the field, if the enemy passed the edge of the board
        if (this.x > 5) {
            this.x = -1;
        }
    };
}