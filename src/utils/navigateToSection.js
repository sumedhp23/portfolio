export function navigateToSection(navigate, sectionId) {
  const el = document.getElementById(sectionId);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/", { state: { scrollTo: sectionId } });
  }
}
