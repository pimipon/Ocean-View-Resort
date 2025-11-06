// Script para manejar las reservas del hotel

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de reserva
    const bookButtons = document.querySelectorAll('.button-secondary, .button-primary');
    const modal = document.getElementById('loadingModal');
    const modalMessage = document.getElementById('modalMessage');
    
    // Agregar evento click a cada botón
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento por defecto del enlace
            
            // Mostrar modal con mensaje de carga
            modal.style.display = 'flex';
            modalMessage.textContent = 'Processing your reservation...';
            
            // Simular tiempo de procesamiento (2 segundos)
            setTimeout(() => {
                // Cambiar a mensaje de éxito
                modalMessage.textContent = 'Reservation Completed!';
                modalMessage.style.color = '#28a745';
                
                // Ocultar spinner
                const spinner = document.querySelector('.spinner');
                spinner.style.display = 'none';
                
                // Agregar ícono de éxito
                const successIcon = document.createElement('div');
                successIcon.innerHTML = '<i class="fa-solid fa-circle-check" style="font-size: 60px; color: #28a745; margin-bottom: 20px;"></i>';
                modalMessage.parentElement.insertBefore(successIcon, modalMessage);
                
                // Cerrar modal después de 2 segundos
                setTimeout(() => {
                    modal.style.display = 'none';
                    
                    // Restablecer modal al estado inicial
                    modalMessage.textContent = 'Processing your reservation...';
                    modalMessage.style.color = '#0C4A60';
                    spinner.style.display = 'block';
                    successIcon.remove();
                }, 2000);
            }, 2000);
        });
    });
    
    // Cerrar modal al hacer click fuera de él
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            
            // Restablecer modal
            const spinner = document.querySelector('.spinner');
            const successIcon = document.querySelector('.fa-circle-check');
            modalMessage.textContent = 'Processing your reservation...';
            modalMessage.style.color = '#0C4A60';
            spinner.style.display = 'block';
            if (successIcon) {
                successIcon.parentElement.remove();
            }
        }
    });
});