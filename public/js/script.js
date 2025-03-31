document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
        });
    });

    const userCards = document.querySelectorAll('.user-card');

    userCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Sizning o'chirishni tasdiqlash kodingiz
    const deleteForms = document.querySelectorAll('.actions form');

    deleteForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!confirm('Haqiqatan ham o\'chirmoqchimisiz?')) {
                event.preventDefault();
            }
        });
    });
});