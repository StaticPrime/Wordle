import { words } from "./words"

interface UsersWord {
    letter: string,
    color: string
}

const playWordle = (wordleWord: string, userWord: string): UsersWord[] => {
    if (wordleWord.length !== 5 && userWord.length !== 5) return null

    let gameOutput: UsersWord[] = []

    for (let i = 0; i < wordleWord.length; i++) {
        if (wordleWord[i] === userWord[i]) {
            gameOutput.push({
                letter: wordleWord[i],
                color: 'green'
            })
        } else {
            const idx = wordleWord.indexOf(userWord[i])

            if (idx === -1) {
                gameOutput.push({
                    letter: userWord[i],
                    color: 'gray'
                })
            } else {
                const letterCount = wordleWord.split(userWord[i]).length - 1
                const usedCount = gameOutput.filter((x) => { return x.letter === userWord[i] }).length

                if (usedCount < letterCount) {
                    gameOutput.push({
                        letter: userWord[i],
                        color: 'yellow'
                    })
                } else {
                    gameOutput.push({
                        letter: userWord[i],
                        color: 'gray'
                    })
                }
            }
        }
    }
    return gameOutput
}

// Test the game
const randomWord = words[0]
console.log(playWordle(randomWord, 'candy'))

export { playWordle }