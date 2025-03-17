class AlnuoModel {
    constructor({ nome, _id, notas } = { notas: {} }) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generate()
        this.notas = {...notas}
        this.media = {}
    }

    generate() {
        AlnuoModel.maxId += 1
        return AlnuoModel.maxId
    }
}

AlnuoModel.maxId = 0