class Spiner {
    constructor() { 
        this.markup = `<div class="spiner__holder is-hidden">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p class="spiner__text">Please stand by</p>
        </div>
    </div>`;
        
    }
    insertIn(element) {
        element.insertAdjacentHTML('beforeend', this.markup)
    }
    off() {
        const spiner = document.querySelector('.spiner__holder');
        spiner.classList.add('is-hidden');
    }
    on() {
        const spiner = document.querySelector('.spiner__holder');
        spiner.classList.remove('is-hidden');
    }
}

export default Spiner;