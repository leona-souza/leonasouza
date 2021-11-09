const defaultLanguage = 'pt'
const urlGithub = 'https://github.com/leona-souza'
const urlLinkedin = 'https://www.linkedin.com/in/leonasouza/'
const urlTwitch = 'https://twitch.tv/leonadev'
const pt = {
  Static: {
    header: 'Leona Souza',
    description: `Olá! Sou uma engenheira de software que reside em São Paulo. 'Já programei em PHP, MySQL, Java e JavaScript. Atualmente trabalho como desenvolvedora frontend usando React na Gamers Club e faço lives na Twitch compartilhando estudos, conhecimentos e aprendendo com a comunidade.`,
    details: `Durante o final de minha adolescência comecei a programar em PHP e MySQL por uma pequena necessidade, mas acabei gostando tanto do desafio lógico que fui me aprofundando por prazer. Consequentemente os clientes foram aparecendo e trabalhei por aproximadamente 4 a 5 anos desenvolvendo sites do zero.
    Eventualmente troquei de ramo e comecei a trabalhar com caligrafia fazendo sobrescrição de convites de casamento e aniversário. Não durou muito tempo até que eu trocasse novamente de carreira, desta vez escolhendo fotografia. Minha principal atividade foi tratamento de imagens.
    Alguns anos depois a paixão pela programação voltou a me provocar e decidi voltar para o ramo com tudo, desta vez para ficar!`
  },
  Cards: [
    {
      title: 'PrograMaria',
      content: `Em 2021 tive a incrível oportunidade de participar do PrograMaria como mestre de cerimônias da sala de Produto.`
    },
    {
      title: 'Rancho Dev',
      content: `Algum texto sobre o evento`
    },
    {
      title: 'Feministech',
      content: `Algum texto sobre o evento`
    },
    {
      title: 'Twitch',
      content: 'asd'
    },
    {
      title: 'Mentoria',
      content: 'asd'
    }
  ]
}
const en = {
  Static: {
    header: 'Leona Souza',
    description: `Hello! I am a software engineer that lives in São Paulo. I have programmed in PHP, MySQL, Java and JavaScript. Now I work as a frontend React developer at Gamers Club and I stream at Twitch sharing my studies, knowledge and learning with the community.`,
    detailes: `text`
  },
  Cards: [
    {
      title: 'Twitch',
      content: 'Card 1 content'
    },
    {
      title: 'Programaria',
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
      <h1>${language.Cards[key].title}</h1>
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








/*                             let LeonaSouza = {
                              position: 'Software Engineer',
                              company: 'Gamers Club',
                              mainSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
                              otherSkills: ['SQL', 'MongoDB', 'Node.js', 'Java', 'Spring'],
                              softSkills: ['Ethics', 'Teamwork', 'Empathy', 'Problem Solver'],
                              social: {
                                twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza' 
                              }
                            }




                                      let LeonaSouza = {
                                        position: 'Software Engineer',
                                        mainSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
                                        otherSkills: ['SQL', 'MongoDB', 'Node.js', 'Java', 'Spring'],
                                        softSkills: ['Ethics', 'Teamwork', 'Empathy', 'Problem Solver'],
                                        social: { 
                                          twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza'
                                        }
                                      }



                                      let LeonaSouza = {
                                        position: 'Software Engineer',
                                        company: 'Gamers Club',
                                        social: {
                                          twitter: 'LeonaDev', twitch: 'LeonaDev', github: 'leona-souza' 
                                        }
                                      } */