const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const photoContainer = document.getElementById('photo-container');

// Akses webcam
navigator.mediaDevices.getUser Media({ video: true })
    .then(stream => {
        video.srcObject = stream;
        // Ambil foto setelah video dimuat
        video.addEventListener('loadedmetadata', () => {
            capturePhoto();
        });
    })
    .catch(err => {
        console.error("Error accessing webcam: ", err);
    });

// Fungsi untuk mengambil foto
function capturePhoto() {
    // Atur ukuran canvas sesuai dengan video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Gambar video ke canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Buat gambar dari canvas
    const img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    
    // Tampilkan gambar di photo container
    photoContainer.innerHTML = ''; // Kosongkan container sebelumnya
    photoContainer.appendChild(img);
}