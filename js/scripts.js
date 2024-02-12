window.addEventListener('DOMContentLoaded', event => {

    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function openModal(modalId) {
    var timestamp = Date.now();
    var uniqueModalId = modalId + '-' + timestamp;
    
    var modalButton = document.querySelector('[data-bs-target="#' + modalId + '"]');
    modalButton.setAttribute('data-bs-target', '#' + uniqueModalId);
    
    var modalElement = document.getElementById(modalId);
    modalElement.id = uniqueModalId;
    
    var modal = new bootstrap.Modal(document.getElementById(uniqueModalId));
    modal.show();
}