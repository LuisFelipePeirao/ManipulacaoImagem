class ManipulacaoImg {
    constructor() {
        this.canvas = fx.canvas();
        this.imageOriginal = document.getElementById('imageOriginal');
        this.image = document.getElementById('image');

        if (this.image.parentNode.querySelector("canvas")) {
            this.image.parentNode.querySelector("canvas").remove();
        }
    }

    carregarImagem() {
        this.imageOriginal = document.getElementById('imageOriginal');
        this.image = document.getElementById('image');
    }

    converterEmTextura() {
        this.texture = this.canvas.texture(this.imageOriginal);
    }

    destroy() {
        if (this.texture) {
            this.texture.destroy();
        }
    }

    inkFilter() {
        this.canvas.draw(this.texture).ink(0.25).update();
    }

    noise() {
        this.canvas.draw(this.texture).noise(1).update();
    }

    sepia() {
        this.canvas.draw(this.texture).sepia(1).update();
    }

    edgeWork() {
        this.canvas.draw(this.texture).edgeWork(10).update();
    }

    lensBlur() {
        this.canvas.draw(this.texture).lensBlur(11, 0.75, 0).update();
    }

    brilhoContraste(brilho, contraste) {
        this.canvas.draw(this.texture).brightnessContrast(brilho, contraste).update();
    }

    atualizarCanvas() {
        if (this.image.parentNode.querySelector("canvas")) {
            this.image.parentNode.querySelector("canvas").remove();
        }

        this.image.parentNode.insertBefore(this.canvas, this.image);
        this.image.style.display = "none";
    }

    toDataUrl() {
        this.image.src = this.canvas.toDataURL('image/png');
    }

}
