const Texts = {
  Header: {
    title: 'Leona Souza'
  },
  Menu: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare erat pulvinar rutrum interdum. Sed a tortor eu sem faucibus sodales. Cras vulputate auctor purus, volutpat elementum nibh bibendum vitae. Mauris blandit dictum lectus, vel sagittis purus imperdiet quis. Vestibulum id sollicitudin quam. Phasellus dapibus commodo tortor ac mollis. Etiam sodales enim quam, sed feugiat erat ornare eget. Vivamus elementum nec nibh vel aliquet. Curabitur tristique sollicitudin est, non dapibus ipsum viverra et. Nunc suscipit enim dui, ut venenatis ante porttitor in. Nunc ullamcorper, neque ac viverra euismod, ipsum urna sagittis eros, quis molestie elit tellus sit amet nisl.'
  }
}

function populateFromObject(object, path) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      const fullPath = `${path}.${key}`
      populateFromObject(object[key], fullPath)
    } else {
      const fullPath = `${path.substring(1)}.${key}`
      document.getElementById(fullPath).innerText = object[key]
    }
  }
}

populateFromObject(Texts, '.Texts')
