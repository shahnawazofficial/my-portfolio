// Page intro animation
gsap.from(".heading", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".subheading", {
    opacity: 0,
    y: -10,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
});

// Skills animation
gsap.from(".skill-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.6,
    ease: "power2.out"
});

// Project animation
gsap.from(".project-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.2,
    ease: "power2.out"
});





// Skill click → filter projects
document.querySelectorAll(".skill-card").forEach(skill => {
    skill.addEventListener("click", () => {
        const selectedSkill = skill.querySelector("span").innerText.toLowerCase();

        document.querySelectorAll(".project-card").forEach(project => {
            const skills = project.dataset.skills;

            if (skills && skills.includes(selectedSkill)) {
                project.style.display = "block";
                gsap.fromTo(project, { opacity: 0 }, { opacity: 1, duration: 0.4 });
            } else {
                project.style.display = "none";
            }
        });
    });
});


document.querySelector(".show-all-btn")?.addEventListener("click", () => {
    document.querySelectorAll(".project-card").forEach(project => {
        project.style.display = "block";
        gsap.fromTo(project, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    });
});
