const config = window.MARIMA_DAY_CONFIG ?? {
  registrationUrl: "COLE_AQUI_O_LINK_DO_FORMULARIO",
  professors: [],
  partners: [],
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const modal = document.querySelector("[data-modal]");
const registrationLinks = document.querySelectorAll("[data-registration-link]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value = "") {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "01";
}

function renderProfessors() {
  const grid = document.querySelector("[data-professors-grid]");
  if (!grid) return;

  const professors = (config.professors ?? []).filter((item) => item.active !== false);

  if (!professors.length) {
    grid.innerHTML = `
      <div class="content-empty reveal">
        <span class="content-empty__index">EM BREVE</span>
        <h3>Os professores confirmados serão apresentados aqui.</h3>
        <p>A seção já está pronta para receber fotos, modalidades, descrições e perfis do Instagram.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = professors
    .map((professor, index) => {
      const name = escapeHtml(professor.name);
      const role = escapeHtml(professor.role);
      const description = escapeHtml(professor.description);
      const instagram = escapeHtml(professor.instagram);
      const image = escapeHtml(professor.image);
      const instagramUrl = safeUrl(professor.instagramUrl);
      const delayClass = index % 3 === 1 ? "reveal--delay-1" : index % 3 === 2 ? "reveal--delay-2" : "";

      const media = image
        ? `<img src="${image}" alt="${name}, professor(a) de ${role}" loading="lazy" onerror="this.parentElement.classList.add('has-error'); this.remove();" />`
        : "";

      return `
        <article class="professor-card reveal ${delayClass}">
          <div class="professor-card__media">
            ${media}
            <div class="professor-card__fallback" aria-hidden="true">
              <strong>${escapeHtml(initials(professor.name))}</strong>
              <span>${String(index + 1).padStart(2, "0")}</span>
            </div>
          </div>
          <div class="professor-card__body">
            <p class="professor-card__role">${role}</p>
            <h3>${name}</h3>
            <p>${description}</p>
            ${
              instagram
                ? `<a class="professor-card__instagram" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">${instagram} <span aria-hidden="true">↗</span></a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPartners() {
  const grid = document.querySelector("[data-partners-grid]");
  if (!grid) return;

  const partners = (config.partners ?? []).filter((item) => item.active !== false);

  if (!partners.length) {
    grid.innerHTML = `
      <div class="content-empty content-empty--partners reveal">
        <span class="content-empty__index">PARCEIROS</span>
        <h3>As marcas parceiras serão apresentadas em breve.</h3>
        <p>As logos aparecerão com fundo transparente e as informações ficarão em uma área separada abaixo.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = partners
    .map((partner, index) => {
      const name = escapeHtml(partner.name);
      const instagram = escapeHtml(partner.instagram);
      const logo = escapeHtml(partner.logo);
      const instagramUrl = safeUrl(partner.instagramUrl);
      const delayClass = index % 3 === 1 ? "reveal--delay-1" : index % 3 === 2 ? "reveal--delay-2" : "";

      const logoMarkup = logo
        ? `
          <div class="partner-card__logo-area">
            <img
              class="partner-card__logo"
              src="${logo}"
              alt="Logo ${name}"
              loading="lazy"
              onerror="const card=this.closest('.partner-card'); this.closest('.partner-card__logo-area')?.remove(); card?.classList.add('partner-card--no-logo');"
            />
          </div>
        `
        : "";

      return `
        <a
          class="partner-card ${logo ? "" : "partner-card--no-logo"} reveal ${delayClass}"
          href="${instagramUrl}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar o Instagram de ${name}"
        >
          ${logoMarkup}
          <div class="partner-card__info">
            <strong>${name}</strong>
            ${instagram ? `<span>${instagram}</span>` : ""}
          </div>
        </a>
      `;
    })
    .join("");
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 14);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  nav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

function openModal() {
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal__close")?.focus();
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

renderProfessors();
renderPartners();

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

registrationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (String(config.registrationUrl).startsWith("http")) {
      window.open(config.registrationUrl, "_blank", "noopener,noreferrer");
      return;
    }

    openModal();
  });
});

modalCloseButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeModal();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
