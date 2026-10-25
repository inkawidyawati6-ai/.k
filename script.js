function bukaKejutan() {
    // Memunculkan kotak pesan rahasia dengan mengubah gaya display-nya menjadi 'block'
    document.getElementById('pesanRahasia').style.display = 'block';
    
    // Memicu efek kembang api digital (konfeti)
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
