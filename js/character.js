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