/**
 * @license
 * Copyright 2017 Nicolai Schmid All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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