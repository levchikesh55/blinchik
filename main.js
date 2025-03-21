document.addEventListener("DOMContentLoaded", function(){
    const gifContainer = document.getElementById('gif-container');
    const content = document.getElementById('content');
    const gifImage = gifContainer.querySelector('img');

    const gifDuration = 1900;
    setTimeout(function(){
        gifContainer.style.display = 'none';
        content.style.display = 'block';
    }, gifDuration);
});
