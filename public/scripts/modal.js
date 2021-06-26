//expoportando a modal
export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelaButton = document.querySelector('.button.cancel')

    cancelaButton.addEventListener("click", close)

    function open() {
        //funcionalidade de atrubuir a classe active para a modal
        modalWrapper.classList.add("active")
    }

    function close() {
        //     //funcionalidade de remover a classe active para a modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}