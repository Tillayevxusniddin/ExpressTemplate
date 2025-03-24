document.addEventListener('DOMContentLoaded', function() {
    const deleteForms = document.querySelectorAll('.actions form');

    deleteForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!confirm('Haqiqatan ham o\'chirmoqchimisiz?')) {
                event.preventDefault();
            }
        });
    });
});