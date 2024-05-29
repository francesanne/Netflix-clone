function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const videoElement = document.querySelector('#exampleModal video');

    // Add an event listener to the modal that triggers when the modal is shown
    myModal._element.addEventListener('shown.bs.modal', function () {
        // Play the video when the modal is shown
        videoElement.play();
    });

    // Add an event listener to the modal that triggers when the modal is hidden
    myModal._element.addEventListener('hidden.bs.modal', function () {
        // Pause the video when the modal is hidden
        videoElement.pause();
    });

    myModal.show();
}
