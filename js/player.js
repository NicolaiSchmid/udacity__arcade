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

// This class requires an update(), render() and
// a handleInput() method.
class Player extends Character {
    constructor() {
        super();
        this.sprite = 'images/char-boy.png';

        // Create the initial position
        this.reset();

        // The width of the sprite image
        this.sizeX = 66;
    }

    update() {
        this.checkWin();
    }

    /**
     * Checks if the player has reached the water and therefore won
     */
    checkWin() {
        if (this.y == 0) {
            this.win = true;
            console.log('win');
        }
    }
    reset() {
        // The absolute pixel coordinates [x, y]
        this.coordinates = [];

        // Resets the win state
        this.win = false;

        // The coordinates based on the 5 x 6 grid
        this.x = Math.floor(Math.random() * 4);
        this.y = 5;
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