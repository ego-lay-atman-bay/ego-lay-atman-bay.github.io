function colorScheme(scheme) {
    if (scheme == 'dark') {
        //dark mode
    } else {
        //light mode
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
