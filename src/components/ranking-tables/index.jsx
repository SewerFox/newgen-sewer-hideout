import { useEffect, useState } from 'react'
import Papa from "papaparse"
import '../../global.css'

export function RankingTable({ children, csvUrl, tableStyle, cols, allowSorting, allowDropping, scoringSystem }) {
    const [resultsTable, setResults] = useState([])

    useEffect(() => {
        const handleRankingTable = async (url) => {
            try {
                const file = await fetch(url)
                const csvData = await file.text()
                await Papa.parse(csvData, {
                    header: false,
                    complete: (parsed) => {
                        const data = parsed.data

                        for (let i = 1; i <= data.length - 1; i++) {
                            let playerResults = structuredClone(data[i])
                            // Convert all playerResults entries to points

                            for (let j = 0; j <= playerResults.length; j++) {
                                if (playerResults[j] === "1st") {
                                    playerResults[j] = scoringSystem[1]
                                } else if (playerResults[j] === "2nd") {
                                    playerResults[j] = scoringSystem[2]
                                } else if (playerResults[j] === "3rd") {
                                    playerResults[j] = scoringSystem[3]
                                } else if (playerResults[j] === "---" ||
                                    playerResults[j] === "absent" ||
                                    playerResults[j] === "withdrew") {
                                    playerResults[j] = scoringSystem[0]
                                } else {
                                    for (let k = 4; k <= scoringSystem.length - 1; k++) {
                                        let positionString = k + "th"

                                        if (playerResults[j] === positionString) {
                                            playerResults[j] = scoringSystem[k]
                                        }
                                    }
                                }
                            }

                            // Dropped-points system parsing
                            if (allowDropping > 0) {
                                const playerName = playerResults[0]
                                const playerEarnedPoints = playerResults.filter(point => typeof point === "number").sort((a, b) => b - a)
                                const playerBadPositions /* Anything beyond the last loops could parse */ = playerResults.filter(
                                    (point) => typeof point === "string" && point !== playerName)
                                const dropParsedPlayerResults = [playerName, ...playerEarnedPoints, ...playerBadPositions]
                                let droppedPlayerResults = structuredClone(dropParsedPlayerResults)

                                for (let i = 1; i <= allowDropping; i++)
                                    droppedPlayerResults.pop()

                                let sumOfPoints = droppedPlayerResults.reduce((acc, entry) => {
                                    if (typeof (entry) != "number") {
                                        return acc + 0
                                    } else return acc + entry
                                }, 0)
                                data[i].push(sumOfPoints)
                            } else {
                                let sumOfPoints = playerResults.reduce((acc, entry) => {
                                    if (typeof (entry) != "number") {
                                        return acc + 0
                                    } else return acc + entry
                                }, 0)
                                data[i].push(sumOfPoints)
                            }
                        }

                        // Sorting the table
                        let formatedTable

                        if (allowSorting) { formatedTable = data.sort((a, b) => b[13] - a[13]) } else { formatedTable = data }

                        // Sending results for post-processing
                        setResults(formatedTable)
                    }
                })
            } catch (error) {
                console.error("Error:", error)
            }
        }

        handleRankingTable(csvUrl)
    }, [])

    const table = []

    const getCellClass = (text) => {
        if (text === "1st") return "rank-1st"
        if (text === "2nd") return "rank-2nd"
        if (text === "3rd") return "rank-3rd"
        if (text === "4th" ||
            text === "5th") return "rank-th"
        if (text === "---") return "rank-null"
        if (text === "absent") return "rank-absent"
        if (text === "withdrew") return "rank-withdrew"
        return ""
    }

    const getPositionClass = (position) => {
        if (position === 1) return "rank-1st"
        if (position === 2) return "rank-2nd"
        if (position === 3) return "rank-3rd"
        if (position === 4 ||
            position === 5) return "rank-th"
        return ""
    }
    const pontuation = (tableStyle === "ranking-single") ? 1 : cols - 2
 
    for (let i = 1; i < resultsTable.length; i++) {
        table.push(<p className={getPositionClass(i)}>{i}</p>)
        table.push(<p className={getPositionClass(i)}>{resultsTable[i][0]}</p>)
        table.push(<p className={getPositionClass(i)}>{resultsTable[i][pontuation]}</p>)
        for (let j = 1; j < children.length - 2; j++) {
            table.push(<p className={getCellClass(resultsTable[i][j])}>{resultsTable[i][j]}</p>)
        }
    }

    document.querySelector(':root').style.setProperty('--num-cols', cols - 3);

    return (
        <div className='w-fit max-w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md'>
            <div className={`w-fit bg-green-600 rounded-sm  text-sm ${tableStyle}`}>
                {children}
            </div>
            <div className={`${tableStyle}`}>
                {table}
            </div>
        </div>
    )

}