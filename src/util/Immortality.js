import Base from './Base'

class Immortality extends Base {
    constructor({
        index = -1, avatar = 'monk', hp = 99999, mp = 99999, currentHp = 0, currentMp = 0, states = []
    }) {
        super()
        this.index = index
        this.indexABS = Math.abs(index)
        this.avatar = avatar
        this.hp = hp
        this.mp = mp
        this.currentHp = currentHp
        this.currentMp = currentMp
        this.states = states

        this.who = (index < 0) ? 'you' : 'defense'
    }

    async setState(states) {
        this.states = states
    }

    async chanting(timeout, type) {
        const _this = this

        const chantingClass = `.${this.who}-${this.indexABS}-chanting${type ? `-${type}` : ''}`
        const normal = $(`.${this.who}-${this.indexABS}-normal`)
        const chantingObject = $(chantingClass)

        normal.classList.toggle('d-none')
        chantingObject.classList.toggle('d-none')
        this.timeout(timeout).then(() => {
            chantingObject.classList.toggle('d-none')
            _this.chantingFinish()
        })
    }

    async chantingFinish() {
        const normal = $(`.${this.who}-${this.indexABS}-normal`)
        const chantingFinish = $(`.${this.who}-${this.indexABS}-chantingFinish`)

        chantingFinish.classList.toggle('d-none')
        this.timeout(1000).then(() => {
            normal.classList.toggle('d-none')
            chantingFinish.classList.toggle('d-none')
        })
    }
}

export default Immortality
