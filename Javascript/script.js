document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animateScroll');
            }
        });
    } , { threshold: 1.0 });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});
