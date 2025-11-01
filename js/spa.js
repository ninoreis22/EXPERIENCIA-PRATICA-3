document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const navLinks = document.querySelectorAll("nav a");

  function loadPage(page) {
    main.innerHTML = templates[page];
    if (page === "cadastro") setupFormValidation();
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = e.target.getAttribute("href").replace(".html", "");
      history.pushState({ page }, "", e.target.href);
      loadPage(page);
    });
  });

  window.addEventListener("popstate", e => {
    const page = e.state?.page || "index";
    loadPage(page);
  });

  loadPage("index");
});
