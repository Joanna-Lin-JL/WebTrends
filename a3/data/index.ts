import { Upgrade } from "../types"

export const TICK = 1000

export const UPGRADES_DATA: Upgrade[] = [
  {
    id: "freshman",
    name: "Freshman",
    basePrice: 10,
    incomePerTick: 1,
  },
  {
    id: "louies",
    name: "Louie's Lunch",
    basePrice: 50,
    incomePerTick: 4,
  },
  {
    id: "BigRed",
    name: "Yornell",
    basePrice: 1,
    incomePerTick: 1000
  },
  {
    id: "bb",
    name: "Bob",
    basePrice: 40,
    incomePerTick: 2
  },
  {
    id: "sb",
    name: "Spongebob",
    basePrice: 1000,
    incomePerTick: 10
  }
]
