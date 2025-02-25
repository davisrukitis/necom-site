import { useState } from "react";

export default function useMobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return { isNavOpen, toggleNav, closeNav };
}
