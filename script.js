function openGreetingCard() {
  const cardScreen = document.getElementById("greeting-card-screen");
  const splashScreen = document.getElementById("splash-screen"); // Đổi id này thành id màn hình chờ cũ của bạn nếu nó khác

  cardScreen.classList.add("hidden");

  if (splashScreen) {
    splashScreen.style.opacity = "1";
    splashScreen.style.pointerEvents = "auto";
  }
}
/* =====================================================
   01. BẮT ĐẦU HÀNH TRÌNH
===================================================== */

function startJourney() {
  document.getElementById("intro").scrollIntoView({
    behavior: "smooth",
  });
}

/* =====================================================
   02. MENU CHƯƠNG TỰ ĐỔI ACTIVE
===================================================== */

const sections = document.querySelectorAll(
  "#intro, #journey, #teachers, #students, #thanks",
);

const menuItems = document.querySelectorAll(".menu-item");

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      const activeItem = document.querySelector(
        `.menu-item[href="#${entry.target.id}"]`,
      );

      if (activeItem) {
        activeItem.classList.add("active");
      }
    });
  },

  {
    threshold: 0.45,
  },
);

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

/* =====================================================
   03. TIMELINE ANIMATION
===================================================== */

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

timelineItems.forEach(function (item) {
  timelineObserver.observe(item);
});

/* =====================================================
   04. MUSIC PLAYER
===================================================== */

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const musicLabel = document.getElementById("musicLabel");

let musicPlaying = false;

musicButton.addEventListener("click", function () {
  if (!musicPlaying) {
    music
      .play()
      .then(function () {
        musicPlaying = true;

        musicButton.innerHTML = "||";

        musicLabel.innerHTML = "Đang phát nhạc ♫";
      })
      .catch(function (error) {
        console.log("Không thể phát nhạc:", error);
      });
  } else {
    music.pause();

    musicPlaying = false;

    musicButton.innerHTML = "♫";

    musicLabel.innerHTML = "Bật nhạc";
  }
});

/* =====================================================
   05. MODAL GỬI LỜI CHÚC
===================================================== */

const wishModal = document.getElementById("wishModal");

function openWishBox() {
  wishModal.classList.add("show");
}

function closeWishBox() {
  wishModal.classList.remove("show");
}

wishModal.addEventListener("click", function (event) {
  if (event.target === wishModal) {
    closeWishBox();
  }
});

/* =====================================================
   06. GỬI LỜI CHÚC
===================================================== */

function sendWish() {
  const message = document.getElementById("wishText").value.trim();

  const name = document.getElementById("wishName").value.trim();

  const success = document.getElementById("wishSuccess");

  if (!message) {
    success.innerHTML = "Bạn hãy viết một lời chúc trước nhé ♡";

    success.style.color = "#b85c5c";

    return;
  }

  const sender = name || "Một người bạn";

  success.innerHTML = `Cảm ơn ${sender} vì lời chúc thật đẹp ♡`;

  success.style.color = "#39805a";

  document.getElementById("wishText").value = "";

  document.getElementById("wishName").value = "";
}

/* =====================================================
   07. XEM LẠI HÀNH TRÌNH
===================================================== */

function replayJourney() {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}
