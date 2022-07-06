class Spiner {
    constructor() { 
        this.markup = `<div id="spiner" class="spiner__holder is-hidden">
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
        const spiner = document.querySelector('#spiner');
        spiner.classList.add('is-hidden');
    }
    on() {
        const spiner = document.querySelector('#spiner');
        spiner.classList.remove('is-hidden');
    }
    delete() {
        const spiner = document.querySelector('#spiner');
        spiner.remove();
    }
}

export default Spiner;