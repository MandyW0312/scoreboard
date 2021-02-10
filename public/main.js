function main() {
  // const team1Name = document.querySelector('section.team1 fieldset input')
  // function changeTeam1Name(event) {
  //   const thingClickedOn = event.target
  //   let newTeamName = thingClickedOn.textContent
  //   const team1NewName = document.querySelector('section.team1 h2')
  //   team1NewName.textContent += event.target.newTeamName
  // }

  const team1AddButton = document.querySelector('section.team1 fieldset i.add')
  const team1SubtractButton = document.querySelector(
    'section.team1 fieldset i.subtract'
  )
  let team1Score = 0
  function handClickT1AddButton(event) {
    const thingClickedOn = event.target
    if (team1Score === 21) {
      window.alert('Yay! Team 1 got to 21 Points First! Team 1 Won!!! ')
      thingClickedOn.classList.add('taken')
      return
    }
    if (thingClickedOn.classList.contains('taken')) {
      console.log('Nopes....')
      return
    }

    team1Score++
    const team1ScoreHeader = document.querySelector('section.team1 h3')
    team1ScoreHeader.textContent = `${team1Score}`
  }
  function handClickT1SubtractButton(event) {
    if (team1Score === 0) {
      console.log('Nopes...')
      return
    }
    team1Score--
    const team1ScoreHeader = document.querySelector('section.team1 h3')
    team1ScoreHeader.textContent = `${team1Score}`
  }

  const team2AddButton = document.querySelector('section.team2 fieldset i.add')
  const team2SubtractButton = document.querySelector(
    'section.team2 fieldset i.subtract'
  )
  let team2Score = 0
  function handClickT2AddButton(event) {
    const thingClickedOn = event.target

    if (team2Score === 21) {
      window.alert('Yay! Team 2 got to 21 Points First! Team 2 Won!!! ')
      thingClickedOn.classList.add('taken')
      return
    }
    if (thingClickedOn.classList.contains('taken')) {
      console.log('Nopes....')
      return
    }

    team2Score++
    const team2ScoreHeader = document.querySelector('section.team2 h3')
    team2ScoreHeader.textContent = `${team2Score}`
  }
  function handClickT2SubtractButton(event) {
    if (team2Score === 0) {
      console.log('Nopes...')
      return
    }
    team2Score--
    const team2ScoreHeader = document.querySelector('section.team2 h3')
    team2ScoreHeader.textContent = `${team2Score}`
  }

  team1AddButton.addEventListener('click', handClickT1AddButton)
  team2AddButton.addEventListener('click', handClickT2AddButton)
  team1SubtractButton.addEventListener('click', handClickT1SubtractButton)
  team2SubtractButton.addEventListener('click', handClickT2SubtractButton)
}

document.addEventListener('DOMContentLoaded', main)
