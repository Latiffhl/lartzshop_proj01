document.addEventListener("DOMContentLoaded", function() {
    const btnDetails = document.querySelectorAll('.btnDetail');
    const btnModal = document.querySelector('.btnModal');
    const modalTitle = document.querySelector('.modalTitle');
    const modalDeskripsi = document.querySelector('.modalDeskripsi');
    const modalImage = document.querySelector('.modalImage');
    const modalHarga = document.querySelector('.modalHarga');
    const btnBeli = document.querySelector('.btnBeli');

    btnDetails.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card');
            const title = card.querySelector('.card-text').textContent;
            const deskripsi = card.querySelector('.deskripsi').innerHTML;
            const harga = card.querySelector('.harga').textContent;
            // Get image source from the card's img element
            const imgSrc = card.querySelector('img').getAttribute('src');
            
            // Set modal content
            modalTitle.textContent = title;
            modalDeskripsi.innerHTML = deskripsi;
            modalHarga.textContent = harga;
            // Set image in modal
            modalImage.innerHTML = `<img src="${imgSrc}" class="img-fluid" alt="${title}">`;
            
            // Set WhatsApp link
            const message = `Halo, saya ingin order ${title} dengan harga ${harga}`;
            btnBeli.href = `https://wa.me/6285180772795?text=${encodeURIComponent(message)}`;
            
            btnModal.click();
        });
    });
});
