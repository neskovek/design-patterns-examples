
class WindowsRenderer {
    renderFormat(format) {
        console.log(`Reproduzindo ${format} no Windows`);
    }
}

class LinuxRenderer {
    renderFormat(format) {
        console.log(`Reproduzindo ${format} no Linux`);
    }
}

class Format {
    constructor(renderer) {
        this.renderer = renderer;
    }
}

class Audio extends Format {
    play() {
        this.renderer.renderFormat('áudio');
    }
}

class Video extends Format {
    play() {
        this.renderer.renderFormat('vídeo');
    }
}

const windows = new WindowsRenderer();
const linux = new LinuxRenderer();

const w1 = new Audio(windows);
w1.play();

const l1 = new Audio(linux);
l1.play();

const w2 = new Video(windows);
w2.play();

const l2 = new Video(linux);
l2.play();