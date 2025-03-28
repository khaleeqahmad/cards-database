import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Psychic Sphere"
		},

		damage: "50"
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psydrive"
		},

		effect: {
			en: "Discard 2 [Psychic] Energy from this Pokémon."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Star"
}

export default card
