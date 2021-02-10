function main() {
  // Change Team 1's Name
  if (document.querySelector('section.team1 fieldset input placeholder')) {
    document.querySelector(
      'section.team1 fieldset input placeholder'
    ).textContent = 'Name'
  }

  function changeTeam1Name(event) {
    var newTeam1Name = document.querySelector('section.team1 h2')
    newTeam1Name.textContent = event.target.value
  }

  // Change Team 2's Name
  if (document.querySelector('section.team2 fieldset input placeholder')) {
    document.querySelector(
      'section.team2 fieldset input placeholder'
    ).textContent = 'Name'
  }

  function changeTeam2Name(event) {
    const newTeam2Name = document.querySelector('section.team2 h2')
    newTeam2Name.textContent = event.target.value
  }

  // Team 1 Add Function
  const team1AddButton = document.querySelector('section.team1 fieldset i.add')
  const team1SubtractButton = document.querySelector(
    'section.team1 fieldset i.subtract'
  )
  let team1Score = 0
  function handClickT1AddButton(event) {
    team1Score++
    if (team1Score <= 21) {
      const team1ScoreHeader = document.querySelector('section.team1 h3')
      team1ScoreHeader.textContent = `${team1Score}`
    }
    if (team1Score === 21) {
      const newName = document.querySelector('section.team1 h2')
      const team1Name = newName.textContent
      return window.alert(
        `Yay! ${team1Name} got to 21 Points First! ${team1Name} Won!!!`
      )
    }
  }

  // Team 1 Subtract Function
  function handClickT1SubtractButton(event) {
    if (team1Score === 0) {
      console.log('Nopes...')
      return
    }
    team1Score--
    const team1ScoreHeader = document.querySelector('section.team1 h3')
    team1ScoreHeader.textContent = `${team1Score}`
  }

  // Team 2 Add Function
  const team2AddButton = document.querySelector('section.team2 fieldset i.add')
  const team2SubtractButton = document.querySelector(
    'section.team2 fieldset i.subtract'
  )
  let team2Score = 0
  function handClickT2AddButton(event) {
    team2Score++
    if (team2Score <= 21) {
      const team2ScoreHeader = document.querySelector('section.team2 h3')
      team2ScoreHeader.textContent = `${team2Score}`
    }
    if (team2Score === 21) {
      const newName = document.querySelector('section.team2 h2')
      const team2Name = newName.textContent
      return window.alert(
        `Yay! ${team2Name} got to 21 Points First! ${team2Name} Won!!!`
      )
    }
  }

  // Team 2 Subtract Function
  function handClickT2SubtractButton(event) {
    if (team2Score === 0) {
      console.log('Nopes...')
      return
    }
    team2Score--
    const team2ScoreHeader = document.querySelector('section.team2 h3')
    team2ScoreHeader.textContent = `${team2Score}`
  }

  // Reset Button
  const resetButton = document.querySelector('section button')
  function resetButtonClick(event) {
    const team1ScoreHeader = document.querySelector('section.team1 h3')
    team1ScoreHeader.textContent = 0
    team1Score = 0
    const team2ScoreHeader = document.querySelector('section.team2 h3')
    team2ScoreHeader.textContent = 0
    team2Score = 0
  }
  document
    .querySelector('section.team1 input')
    .addEventListener('input', changeTeam1Name)

  document
    .querySelector('section.team2 input')
    .addEventListener('input', changeTeam2Name)

  team1AddButton.addEventListener('click', handClickT1AddButton)
  team2AddButton.addEventListener('click', handClickT2AddButton)

  team1SubtractButton.addEventListener('click', handClickT1SubtractButton)
  team2SubtractButton.addEventListener('click', handClickT2SubtractButton)

  resetButton.addEventListener('click', resetButtonClick)
}

document.addEventListener('DOMContentLoaded', main)
