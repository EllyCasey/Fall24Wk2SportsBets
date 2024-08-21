let bank = 100

const players = [
    { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
    { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
    { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
    { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
    { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
    { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
    { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
    { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
    { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]


const team1Elm = document.getElementById('team1')
const team2Elm = document.getElementById('team2')

function drawTeam1() {
    let team1Content = ''
    players.forEach((player) => {
        if (player.teamNumber == 1) {
            team1Content += player.emoji
        }
    })
    // console.log('Team 1', team1Content)
    team1Elm.innerText = team1Content
}

function drawTeam2() {
    let team2Content = ''
    players.forEach((player) => {
        if (player.teamNumber == 2) {
            team2Content += player.emoji
        }
    })
    // console.log('Team 2', team2Content)
    team2Elm.innerText = team2Content
}

// bank starts at 100 (let bank = 100 at top)
function betTeam1() {
    let team1Arr = players.filter((player) => player.teamNumber == 1)
    console.log('team 1: ', team1Arr)

}

function betTeam2() {
    let team2Arr = players.filter((player) => player.teamNumber == 1)
    console.log('team 2: ', team2Arr)
    let totalSkill = 0
    for (let i = 0; i < team2Arr.length; i++) {
        let team2 = team2Arr[i]
        totalSkill += team2.skill + totalSkill
        console.log('team 2 total skill', totalSkill);

        return totalSkill
    }

}


drawTeam1()
drawTeam2()
betTeam1()
betTeam2()