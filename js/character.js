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
class Character {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.coordinates = [];

        this.sprite = '';

        this.sizeX = 0;
    }

    render() {
        // Coverts the x and y coordinates to pixel and renders the image to the canvas
        this.coordinates = [this.x * 100, (this.y * 80) - 30];
        ctx.drawImage(Resources.get(this.sprite), ...this.coordinates);
    }

}