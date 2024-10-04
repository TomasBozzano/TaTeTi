import { Square } from "./Square"

export default function Board({board, updateBoard}) {
  return (
    <section className="game">
                {
                    board.map((value, index) => {
                        return (
                            <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                            >
                                {value}
                            </Square>

                        )
                    })
                }
            </section>
  )
}
