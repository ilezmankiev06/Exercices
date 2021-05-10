import { lottery_draw } from "./lottery_draw"

type Draw = number[]

export function contextFunction(ticket: Draw): void {
  // Code the function here
    if (ticket.toString() === lottery_draw().toString()) {
      console.log("You won the lottery!")
  }else if ((ticket !== lottery_draw())){
      console.log("You lost...")
  }
}