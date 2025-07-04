let liked = false;
    function toggleLike() {
      const btn = document.getElementById('likeBtn');
      liked = !liked;

      if (liked) {
        btn.classList.add('liked');
        btn.textContent = 'Liked ❤️';
      } else {
        btn.classList.remove('liked');
        btn.textContent = 'Like';
      }
    }
  
