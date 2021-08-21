const defaultLanguage = 'pt'
const urlGithub = 'https://github.com/leona-souza'
const urlLinkedin = 'https://www.linkedin.com/in/leonasouza/'
const urlTwitch = 'https://twitch.tv/leonadev'
const pt = {
  Static: {
    header: 'Leona Souza',
    description: 'Olá. Sou uma engenheira de software que reside em São Paulo. '+
    'Já programei em PHP, MySQL, Java e JavaScript. Atualmente trabalho como '+
    'desenvolvedora em React na Gamers Club e faço lives na Twitch compartilhando '+
    'estudos, conhecimentos e aprendendo com a comunidade.'
  },
  Cards: [
    {
      title: 'Título do card 1',
      content: 'Conteúdo do card 1'
    },
    {
      title: 'Título do card 2',
      content: 'Conteúdo do card 2'
    }
  ]
}
const en = {
  Static: {
    header: 'Leona Souza',
    description: 'Hello. I am a software engineer that lives in São Paulo '+
    'I have programmed in PHP, MySQL, Java and JavaScript. Now I work as '+
    'a React developer at Gamers Club and I stream at Twitch sharing my '+
    'studies, knowledge and learning with the community.'
  },
  Cards: [
    {
      title: 'Card 1 title',
      content: 'Card 1 content'
    },
    {
      title: 'Card 2 title',
      content: 'Card 2 content'
    }
  ]
}

const loadStaticFromObject = function(language, path = 'Static') {
  for (let key in language[path]) {
    document.getElementById(`${path}.${key}`).innerText = language[path][key]
  }
}

const loadCards = function(language, path = 'Cards') {
  document.getElementById(path).innerHTML = ''

  for (let key in language[path]) {
    document.getElementById(path).innerHTML += `
    <card class="ConteudoDinamico__Card">
      <h3>${language.Cards[key].title}</h3>
      <p>${language.Cards[key].content}</p>
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

const populatePage = function(language) {
  loadStaticFromObject(language)
  loadLinks()
  loadCards(language)
}

populatePage(eval(defaultLanguage))
