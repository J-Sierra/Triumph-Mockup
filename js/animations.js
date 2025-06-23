document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: .8} });

  tl.from("#hero-title", {
    y: -50,
    opacity: 0,
  })
    .from("#hero-sub", {
      y: -30,
      opacity: 0,
    }, "+=0.2")
    .from("#hero-buttons .btn", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
    }, "+=0.2")
     .from( "#logo, #create-account, #service-timer", {
      opacity: 0,
      y: 20,
    }, );
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#mission-header", {
    scrollTrigger: {
      trigger: "#mission-section",
      start: "top 80%",
    },
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  });
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".card",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power3.out",
  });

  gsap.from(".mission-subtext", {
    scrollTrigger: {
      trigger: ".mission-subtext",
      start: "top 85%",
    },
    y: 20,
    opacity: 0,
    stagger: 0.25,
    duration: 0.6,
    ease: "power3.out",
  });

  // Fade in the image
  gsap.from("#mission-mural", {
    scrollTrigger: {
      trigger: "#mission-mural",
      start: "top 80%",
    },
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out",
  });
});
 document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#love", {
    scrollTrigger: {
      trigger: "#love",
      start: "center center",
      toggleActions: "play none none none",
    },
    keyframes: [
      { scale: 2, duration: 1 },
      { scale: 1, duration: 1 },
    ],
    ease: "power3.out",
  });
 });
const buttons = document.querySelectorAll(".btn, .media-icon");

buttons.forEach(btn => {
  // Hover scale
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.15, duration: 0.2, ease: "power1.out" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.inOut" });
  });

  // Click bounce
  btn.addEventListener("click", () => {
    gsap.fromTo(btn,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      }
    );
  });
});
const footerLinks = document.querySelectorAll(".link,.link-white",);

footerLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { color: "#ED4B1E", duration: 0.1, ease: "power1.out", scale: 1.05 });
  });
  link.addEventListener("mouseleave", () => {
    const originalColor = link.classList.contains("link-white") ? "#ffffff" : "#000000";

    gsap.to(link, {
      color: originalColor,
      duration: 0.1,
      ease: "power1.inOut",
      scale: 1
    });
  });

  link.addEventListener("click", () => {
    gsap.fromTo(link,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      }
    );
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".share-story",
      start: "top 70%", // adjust for when to begin
    },
    defaults: { ease: "power3.out", duration: 0.8 }
  });

  tl.from("#story-left", { y: -50, opacity: 0 })
    .from(".story-img", {
      y: -50,
      opacity: 0,
      stagger: 0.2
    }, );
});
