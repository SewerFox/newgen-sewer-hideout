import { useEffect, useState } from 'react'
import Papa from "papaparse"

export function RankingTable({ children, csvUrl }) {
    const [resultsTable, setResults] = useState([]);

    useEffect(() => {
        const handleRankingTableEnduro = async (url) => {
            try {
                const file = await fetch(url)
                const csvData = await file.text()
                await Papa.parse(csvData, {
                    header: false,
                    complete: (parsed) => {
                        const data = parsed.data
                        const scoringSystem = [0, 10, 8, 6, 5, 4, 3, 2, 1]
                        const resultsLength = data.length - 1

                        for (let i = 1; i <= resultsLength; i++) {
                            let sumOfPoints = 0

                            for (let j = 1; j <= resultsLength; j++) {
                                switch (data[i][j]) {
                                    case "1st":
                                        sumOfPoints += scoringSystem[1]
                                        break
                                    case "2nd":
                                        sumOfPoints += scoringSystem[2]
                                        break
                                    case "3rd":
                                        sumOfPoints += scoringSystem[3]
                                        break
                                    case "4th":
                                        sumOfPoints += scoringSystem[4]
                                        break
                                    case "5th":
                                        sumOfPoints += scoringSystem[5]
                                        break
                                    case "6th":
                                        sumOfPoints += scoringSystem[6]
                                        break
                                    case "7th":
                                        sumOfPoints += scoringSystem[7]
                                        break
                                    case "8th":
                                        sumOfPoints += scoringSystem[8]
                                        break
                                    default:
                                        sumOfPoints += scoringSystem[0]
                                        break
                                }
                            }

                            data[i].push(sumOfPoints)
                        }

                        // Sorting the table
                        const formatedTable = data.sort((a, b) => b[13] - a[13])

                        setResults(formatedTable)
                    }
                })
            } catch (error) {
                console.error("Error:", error)
            }
        }

        handleRankingTableEnduro(csvUrl)
    }, [])

    const table = []

    const getCellClass = (text) => {
        if (!text) return "table-data";
        if (text.includes("1st")) return "rank-1st";
        if (text.includes("2nd")) return "rank-2nd";
        if (text.includes("3rd")) return "rank-3rd";
        if (text.includes("4th") ||
            text.includes("5th")) return "rank-th";
        if (text.includes("---")) return "rank-null";
        if (text.includes("absent")) return "rank-absent";
        if (text.includes("withdrew")) return "rank-withdrew";
        return "";
    };

    const getPositionClass = (position) => {
        if (position === 1) return "rank-1st";
        if (position === 2) return "rank-2nd";
        if (position === 3) return "rank-3rd";
        if (position === 4 ||
            position === 5) return "rank-th";
        return "";
    };

    for (let i = 1; i < resultsTable.length; i++) {
        table.push(<p className={getPositionClass(i)}>{i}</p>);
        table.push(<p className={getPositionClass(i)}>{resultsTable[i][0]}</p>);
        table.push(<p className={getPositionClass(i)}>{resultsTable[i][13]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][1])}>{resultsTable[i][1]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][2])}>{resultsTable[i][2]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][3])}>{resultsTable[i][3]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][4])}>{resultsTable[i][4]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][5])}>{resultsTable[i][5]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][6])}>{resultsTable[i][6]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][7])}>{resultsTable[i][7]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][8])}>{resultsTable[i][8]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][9])}>{resultsTable[i][9]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][10])}>{resultsTable[i][10]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][11])}>{resultsTable[i][11]}</p>);
        table.push(<p className={getCellClass(resultsTable[i][12])}>{resultsTable[i][12]}</p>);
    }

    return (
        <div className='w-11/12 m-auto mt-3 mb-3 overflow-x-auto border-2 border-green-600 rounded-md'>
            <div className='min-w-fit bg-green-600 rounded-sm ranking-enduro text-sm'>
                {children}
            </div>
            <div className='ranking-enduro'>
                {table}
            </div>
        </div>
    )

}