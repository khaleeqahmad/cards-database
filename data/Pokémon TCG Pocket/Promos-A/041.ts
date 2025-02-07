import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Togepi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
