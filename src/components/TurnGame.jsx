import { Square } from "./Square"

export default function TurnGame({turn, PIEZAS}) {
  return (
    <section className="turn">
      <Square isSelected={turn === PIEZAS.X}>{PIEZAS.X}</Square>
      <Square isSelected={turn === PIEZAS.O}>{PIEZAS.O}</Square>
    </section>
  )
}
