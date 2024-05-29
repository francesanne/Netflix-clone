
var modalTriggers = document.querySelectorAll('[id^="modalTrigger"]');
modalTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
        var imageUrl = trigger.querySelector('img').getAttribute('src');
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();

        var videoElement = document.querySelector('#exampleModal video');

        myModal._element.addEventListener('shown.bs.modal', function () {
            // Play the video when the modal is shown
            videoElement.play();
        });

        myModal._element.addEventListener('hidden.bs.modal', function () {
            // Pause the video when the modal is hidden
            videoElement.pause();
        });
        document.querySelector('.add').addEventListener('click', function() {
            fetch("/api/addImage", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ imageUrl: imageUrl })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    // Success message with SweetAlert
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1000
                      });
                }else if(data.status === "already_exists"){
                    Swal.fire({
                        position: "center",
                        icon: "danger",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1000
                      });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
});