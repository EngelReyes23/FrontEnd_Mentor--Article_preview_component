document.addEventListener("DOMContentLoaded", () => {
	const share_box = document.querySelector(".share__box");

	document.querySelectorAll(".share").forEach(function(share) {
    share.addEventListener("click", () => {
      share_box.classList.toggle("active");
      if (share_box.classList.contains('active')) {
        if (window.innerWidth < 768) {
          document.querySelector('.profile').style.display = 'none';
        document.querySelector('.share').style.display = 'none';}
        }
      else {
        document.querySelector('.profile').style.display = 'flex';
        document.querySelector('.share').style.display = 'flex';
      }
		});
  });
});
