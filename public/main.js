function main() {
  const team1AddButton = document.querySelector('section.team1 fieldset i.add')
  const team1SubtractButton = document.querySelector(
    'section.team1 fieldset i.subtract'
  )
  let team1Score = 0
  function handClickT1AddButton(event) {
    team1Score++
    const team1ScoreHeader = document.querySelector('section.team1 h3')
    team1ScoreHeader.textContent = `${team1Score}`
  }
  function handClickT1SubtractButton(event) {
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
    team2Score++
    const team1ScoreHeader = document.querySelector('section.team2 h3')
    team1ScoreHeader.textContent = `${team2Score}`
  }
  function handClickT2SubtractButton(event) {
    team2Score--
    const team1ScoreHeader = document.querySelector('section.team2 h3')
    team1ScoreHeader.textContent = `${team2Score}`
  }

  team1AddButton.addEventListener('click', handClickT1AddButton)
  team2AddButton.addEventListener('click', handClickT2AddButton)
  team1SubtractButton.addEventListener('click', handClickT1SubtractButton)
  team2SubtractButton.addEventListener('click', handClickT2SubtractButton)
}

document.addEventListener('DOMContentLoaded', main)
