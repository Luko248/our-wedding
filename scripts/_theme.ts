export const initTheme = (): void => {
    const themeBtn: HTMLElement | null = document.getElementById("themeBtn");
    const prefersDarkScheme: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme: string | null = localStorage.getItem("theme");
    const body: HTMLElement | null = document.body;
    let theme: string = currentTheme || "light"; // Declare theme as a global variable and initialize it with currentTheme or "light"
  
    function toggleTheme(): void {
      if (prefersDarkScheme.matches) {
        body?.classList.toggle("light-theme");
        const isLightTheme: boolean = body?.classList.contains("light-theme") || false;
        theme = isLightTheme ? "light" : "dark";
      } else {
        body?.classList.toggle("dark-theme");
        const isDarkTheme: boolean = body?.classList.contains("dark-theme") || false;
        theme = isDarkTheme ? "dark" : "light";
      }
      localStorage.setItem("theme", theme);
      toggleThemeBtnClass(); // Call function to toggle classes on themeBtn
    }
  
    function toggleThemeBtnClass(): void {
      themeBtn?.classList.toggle("theme-switch--light", theme === "light");
      themeBtn?.classList.toggle("theme-switch--dark", theme === "dark");
    }
  
    function applyTheme(): void {
      themeBtn?.classList.remove("theme-switch--dark", "theme-switch--light"); // Remove existing theme classes
      if (theme === "dark") {
        body?.classList.add("dark-theme");
        themeBtn?.classList.add("theme-switch--dark");
      } else if (theme === "light") {
        body?.classList.add("light-theme");
        themeBtn?.classList.add("theme-switch--light");
      }
    }
  
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
    }
  
    applyTheme();
  };
  