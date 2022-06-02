document.addEventListener('mousedown', e => {
  elements = document.elementsFromPoint(e.clientX, e.clientY)
  dropdown = document.getElementsByClassName('projects')[0]

  if (!elements.indexOf(dropdown) !== -1) {
    dropdown.classList.remove('projects')
    dropdown.classList.add('projects')
  }

  // console.log(document.querySelectorAll(':hover'))
  // document.getElementById('debug').innerText = document.querySelectorAll(':hover')[0].outerHTML
}, {passive: true})