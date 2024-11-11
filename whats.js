document.addEventListener('DOMContentLoaded', function () {
    const whatsappButton = document.getElementById('whatsapp-button');
    const phoneNumber = '5514991476856'; // Substitua pelo seu número de telefone

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Se estiver em um dispositivo móvel
        whatsappButton.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
        // Se estiver em um desktop
        whatsappButton.href = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    }
});