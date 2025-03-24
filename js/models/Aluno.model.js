class AlnuoModel {
    constructor({ nome, _id, notas } = { notas: {} }) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generate()
        this.notas = {...notas}
        this.media = {}

        for (let materia in this.notas) {
            this.media[materia] = average(...this.notas[materia])
        }
    }

    generateId() {
        AlnuoModel.maxId += 1
        return AlnuoModel.maxId
    }
}

AlnuoModel.maxId = 0