const themeToggle = document.querySelector("#theme-toggle");
const skillsToggle = document.querySelector("#skills-toggle");
const skills = document.querySelectorAll("#skills-list li");

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";

    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Mode terang" : "Mode gelap";
});

skillsToggle.addEventListener("click", () => {
    const shouldHighlight = skillsToggle.getAttribute("aria-pressed") !== "true";

    skills.forEach((skill) => {
        skill.classList.toggle("is-highlighted", shouldHighlight);
    });

    skillsToggle.setAttribute("aria-pressed", String(shouldHighlight));
    skillsToggle.textContent = shouldHighlight ? "Hapus sorotan" : "Sorot keahlian";
});
