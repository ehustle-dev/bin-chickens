(function () {
  var toast = document.querySelector(".toast");
  var hideTimer = 0;
  var showTimer = 0;
  var message = "Superior has rejected your application. Try more consumes.";

  function showToast() {
    if (!toast) return;
    window.clearTimeout(hideTimer);
    window.clearTimeout(showTimer);
    toast.hidden = true;
    toast.textContent = "";
    showTimer = window.setTimeout(function () {
      toast.textContent = message;
      toast.hidden = false;
    }, 20);
    hideTimer = window.setTimeout(function () {
      toast.hidden = true;
    }, 5200);
  }

  document.querySelectorAll("[data-join]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      showToast();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toast && !toast.hidden) {
      toast.hidden = true;
      window.clearTimeout(hideTimer);
    }
  });

  document.querySelectorAll("img").forEach(function (img) {
    function markMissing() {
      img.classList.add("is-missing");
    }
    img.addEventListener("error", markMissing);
    if (img.complete && img.naturalWidth === 0) markMissing();
  });
})();
