const loadStaticFromObject = function(language, path = 'Static') {
  for (let key in language[path]) {
    document.getElementById(`${path}.${key}`).innerText = language[path][key]
  }
}

const loadCards = function(language, path = 'Cards') {
  document.getElementById(path).innerHTML = ''

  for (let key in language[path]) {
    const {
      content,
      image,
      title
    } = language.Cards[key]

    const imageTag = image ?
      `<img src='${image}' class='ConteudoDinamico__Image' />` :
      ''

    document.getElementById(path).innerHTML += `
    <card class="ConteudoDinamico__Card">
      <h1 class="horizontalLine">${title}</h1>
      ${imageTag}
      <p>${content}</p>
    </card>
    `
  }
}

const loadLinks = function() {
  document.getElementById('Footer.links').innerHTML = ""
  document.getElementById('Footer.links').innerHTML += `
    <span class="clickCursor" onclick="link(urlGithub)">Github</span>
    <span class="clickCursor" onclick="link(urlLinkedin)">Linkedin</span>
    <span class="clickCursor" onclick="link(urlTwitch)">Twitch</span>
  `
}

const languageSwitch = function(language) {
  populatePage(eval(language))
}

const link = function(destination) {
  return window.open(destination, '_blank')
}

const toggleAbout = function () {
  const hideElement = document.getElementById('hide')
  const arrowElement = document.getElementById('arrow')

  const { display } = window.getComputedStyle(hideElement)
  if (display === 'none') {
    hideElement.style.display = 'flex'
    arrowElement.style.transform = `rotate(180deg)`
  } else {
    hideElement.style.display = 'none'
    arrowElement.style.transform = `rotate(0deg)`
  }
}

const populatePage = function(language) {
  loadStaticFromObject(language)
  loadLinks()
  loadCards(language)
}

populatePage(eval(defaultLanguage))
