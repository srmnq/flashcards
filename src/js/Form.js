export default class Form {
  constructor() {
    const templateEl = document.querySelector('#form-template')
    const template = templateEl.innerHTML
    document.body.insertAdjacentHTML('afterbegin', template)
    this.el = document.querySelector('.form')

    

  }
}
