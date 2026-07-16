import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const el = document.getElementById(location.state.scrollTo);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
      // Clear the state natively so refreshing doesn't scroll again, without interrupting the current scroll
      window.history.replaceState({}, document.title);
    }, 100);
  }, [location]);
}
