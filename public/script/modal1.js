function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const videoElement = document.querySelector('#exampleModal video');

    myModal._element.addEventListener('shown.bs.modal', function () {
        videoElement.play();
    });

    myModal._element.addEventListener('hidden.bs.modal', function () {
        videoElement.pause();
    });

    myModal.show();
}

