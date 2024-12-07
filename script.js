document.addEventListener('DOMContentLoaded', () => {
    
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        fontFamily: 'Arial, sans-serif',
        zIndex: '10000',
        textAlign: 'center',
    });

    overlay.textContent = 'Bem-vindo! Espero que goste do meu perfil !';

    document.body.appendChild(overlay);

    
    setTimeout(() => {
        overlay.remove();
    }, 3000);
});
