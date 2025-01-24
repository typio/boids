declare global {
    interface Array<T> {
        shuffle(): T[];
    }
}

Array.prototype.shuffle = function () {
    let m = this.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);

        t = this[m];
        this[m] = this[i];
        this[i] = t;
    }

    return this;
}


