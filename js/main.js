// Entry animations
gsap.from(".title", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".card", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    delay: 0.3
});

// Page transition on click
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (e) {
        e.preventDefault();
        const link = this.getAttribute("data-link");

        gsap.to(".container", {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power2.in",
            onComplete: () => {
                window.location.href = link;
            }
        });
    });
});
