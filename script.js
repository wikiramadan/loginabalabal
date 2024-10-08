document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit default

    // Ambil nilai input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validasi sederhana (contoh login dengan username dan password statis)
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        // Redirect ke halaman lain, jika diperlukan
        // window.location.href = 'dashboard.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password!';
        document.getElementById('errorMessage').style.visibility = 'visible';
    }
});
