// Intro animation
gsap.from(".cyber-heading", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".cyber-subheading", {
    opacity: 0,
    y: -10,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
});

// Terminal lines animation
gsap.from(".terminal-box p", {
    opacity: 0,
    x: -20,
    duration: 0.5,
    stagger: 0.15,
    delay: 0.6,
    ease: "power2.out"
});

// Projects animation
gsap.from(".cyber-project", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    delay: 1.2,
    ease: "power2.out"
});



document.querySelectorAll(".skill-card").forEach(skill => {
    skill.addEventListener("click", () => {
        const selectedSkill = skill.querySelector("span").innerText.toLowerCase();

        document.querySelectorAll(".project-card").forEach(project => {
            const skills = project.dataset.skills;

            project.style.display = skills && skills.includes(selectedSkill)
                ? "block"
                : "none";
        });
    });
});
