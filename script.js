
    let liked = false;

    function toggleLike(event) {
      event.stopPropagation();
      const btn = document.getElementById('likeBtn');
      liked = !liked;

      btn.textContent = liked ? 'Liked ❤️' : 'Like';
    }

    function flipImage() {
      const flipper = document.getElementById('flipper');
      flipper.classList.toggle('flipped');
    }
