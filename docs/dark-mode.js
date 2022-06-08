function colorScheme(scheme) {
    if (scheme == 'dark') {
        document.getElementById("github-img").src = "\\assets\\icons\\GitHub\\PNG\\GitHub-Mark-Light-120px-plus.png"
    } else {
        document.getElementById("github-img").src = "\\assets\\icons\\GitHub\\PNG\\GitHub-Mark-120px-plus.png"
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    colorScheme(newColorScheme)
});

// Check to see if Media-Queries are supported
if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      scheme = 'dark'
  } else {
      scheme = 'light'
  }
  colorScheme(scheme)
} else {
  // Default (when Media-Queries are not supported)
}