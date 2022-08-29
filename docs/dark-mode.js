function colorScheme(scheme) {
    if (scheme == 'dark') {
        document.getElementById("github-img").src = "\\assets\\icons\\GitHub\\Vector\\GitHub-Mark-dark-16px.svg"
    } else {
        document.getElementById("github-img").src = "\\assets\\icons\\GitHub\\Vector\\GitHub-Mark-light-16px.svg"
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
