class Music {
    constructor(stt, name, category, singer, lyrics) {
        this._stt = stt;
        this._name = name;
        this._category = category;
        this._singer = singer;
        this._lyrics = lyrics;
    }

    get stt() {
        return this._stt;
    }

    set stt(value) {
        this._stt = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get singer() {
        return this._singer;
    }

    set singer(value) {
        this._singer = value;
    }

    get lyrics() {
        return this._lyrics;
    }

    set lyrics(value) {
        this._lyrics = value;
    }
}