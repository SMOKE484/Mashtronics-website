let nextBtn = document.querySelector('.why-nav-arrows .why-next');
let prevBtn = document.querySelector('.why-nav-arrows .why-prev');

let slider = document.querySelector('.why-slider');
let sliderList = slider.querySelector('.why-list');
let thumbnail = document.querySelector('.why-thumbnails');
let thumbnailItems = thumbnail.querySelectorAll('.why-thumb-item');

// Initialize the first thumbnail item
thumbnail.appendChild(thumbnailItems[0]);

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.why-item');
    
    if (direction === 'next') {
        // Move the first slider item to the end and the first thumbnail item to the end
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        // Move the last slider item to the start and the last thumbnail item to the start
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Remove animation classes after the animation ends
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true }); // Remove the event listener after it's triggered once
}
