const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

/* holds the character state */
let state = {}

function startGame() {
    /* function for starting the game */
    /* start the game with an empty state */
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    /* function for showing the next text that is to be loaded */
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    /* if there is no required state or a required state */
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    /* displays which option the user selected */
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    /* if you have blue goo, then the option state removes it, your state is the new item */
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'King Ghidorah has defeated Godzilla! And the Skullcrawler is trying to escape Skull Island to bow to The False King. Time to put him down!',
        options: [
            {
                text: 'Pry jaw',
               
                nextText: 2
            },
            {
                text: 'Uppercut',
                nextText: 6
            },
			{
                text: 'Pick up rock',
                nextText: 5
            },
			
        ]
    },
    {
        id: 2,
        text: 'The Skullcrawler stuns you by hitting your eye!',
        options: [
            {
                text: 'Grab the tongue of Skullcrawler and spin it!',
               
                nextText: 3
            },
            {
                text: 'Grab a tree',
                
                nextText: 7
            },
            {
                text: 'Try and grapple',
                nextText: 5
            }
        ]

    },
    {
        id: 3,
        text: 'You have the Skullcrawler by the tongue!',
        options: [
            {
                text: 'Try to rip out the tongue',
                nextText: 4
            },
            {
                text: 'Throw the Skullcrawler',
                nextText: 5
            },
            
        ]

    },
    {
        id: 4,
        text: 'You rip out the Skullcrawlers tongue, and his digestive tract!',
        options: [
            {
				text: 'Advance',
                nextText: 10
            }
        ]

    },
    {
        id: 5,
        text: 'You chase after the Skullcrawler but get stuck in underwater chains, and the Skullcrawler tears out your throat',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'With sheer brute strength, you kill the Skullcrawler in one hit!',
        options: [
              {
                text: 'Advance',
                nextText: 10
              }
        ]
    },
    {
        id: 7,
        text: 'Do you throw the tree, or hit the Skullcrawler with it?',
        options: [
            {
                text: 'Throw',
                nextText: 5
            },
            {
                text: 'Hit the Skullcrawler with the tree',
                nextText: 9
            }
            
        ]
    },
    {
        id: 9,
        text: 'You stun the Skullcrawler, and rip out its tongue and digestive tract.',
        options: [
            {
                text: 'Advance',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: 'You travel to Mexico to confront Ghidorah, but he has sent Rodan after you!',
        options: [
            {
                text: 'Stand your ground',
                nextText: 12
            },
			{
				text: 'Charge Rodan',
				nextText: 11
			},
			{
				text: 'Bait Rodan',
				nextText: 13
			}
        ]

    },
	{
		id: 12,
        text: 'Rodan flies at you, but you grab his wings, tear them off, and have a fiery snack! Yum',
        options: [
            {
                text: 'Advance',
                nextText: 22
            }
        ]
	},
	{
		id: 11,
        text: 'You charge Rodan, but he outsmarts you and wraps his wings around you, scorching you!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
	},
	{
		id: 13,
        text: 'Rodan flies at you!',
        options: [
            {
                text: 'Stand ground',
                nextText: 14
            },
			{
				text: 'Throw a boulder',
                nextText: 15
			}
        ]
	},
	{
		id: 14,
        text: 'Rodan continues fly at you!',
        options: [
            {
                text: 'Superman punch',
                nextText: 16
            },
			{
				text: 'Dodge',
                nextText: 17
			}
        ]
	},
	{
		id: 15,
        text: 'You anger Rodan, and he charges his supersonic speed, and impales you with his beak!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
	},
	{
		id: 16,
        text: 'You stun Rodan!',
        options: [
            {
                text: 'Stand on Rodan',
                nextText: 18
            },
			{
                text: 'Strangle',
                nextText: 19
            }
        ]
	},
	{
		id: 17,
        text: 'Rodan outsmarts you! He uses his wings to squeeze your brain and he has a snack',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
	},
	{
		id: 18,
        text: 'You have an opportunity to win!',
        options: [
            {
                text: 'Snap neck',
                nextText: 20
            },
			{
                text: 'Ground pound',
                nextText: 21
            }
        ]
	},
	{
		id: 19,
        text: 'You try to strange Rodan, but he smacks his wings of your head, killing you!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
	},
	{
		id: 20,
        text: 'You have vanquised the fire demon!',
        options: [
            {
                text: 'Advance',
                nextText: 22
            }
        ]
	},
	{
		id: 21,
        text: 'Rodan is submitting!',
        options: [
            {
                text: 'Kill Rodan and advance',
                nextText: 22
            },
			{
                text: 'Spare Rodan, and recruit him!',
				setState: {RodanAlly: true},
                nextText: 22
            },
        ]
	},
	{
		id: 22,
        text: 'The Kaiju, Mechagodzilla, created by Humans, has gone rogue! He may become a bigger threat than Ghidorah himself!',
        options: [
            {
                text: 'Bait Proton scream',
                nextText: 23
            },
			{
                text: 'Run and jump at Mechagodzilla',
                nextText: 24
            },
			{
				text: 'Call upon Rodan for help!',
				requiredState: (currentState) => currentState.RodanAlly,
				nextText: 25
			}
        ]
	},
	{
		id: 23,
        text: 'Mechagodzilla charges his proton scream, but you grab his tail and use it to fry his components!',
        options: [
            {
                text: 'Advance',
                nextText: 26
            },
			{
                text: 'Grab Mechagodzillas tail and advance',
				setState: {TailWeapon: true},
                nextText: 26
            }
		]
	},
	{
		id: 24,
        text: 'You go directly for MechaG, and he makes short work of you!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 25,
        text: 'Rodan joins the fight, it is now a 2v1!',
        options: [
            {
                text: 'Wrap Mechagodzilla with Rodans wings!',
                nextText: 27
            },
			{
				text: 'Turn on Rodan and use him as a shield!',
                nextText: 28
			},
			{
				text: 'Bait a charge attack from Mecha',
                nextText: 29
			}
			
		]
	},
	{
		id: 27,
        text: 'Rodan wraps around Mechagodzilla and tries to melt him! And Kong rips Mechas head off',
        options: [
            {
                text: 'Advance',
                nextText: 26
            },
			{
                text: 'Grab Mechagodzillas tail',
				setState: {TailWeapon: true},
                nextText: 26
            },
			
		]
	},
	{
		id: 28,
        text: 'Rodan dies, but charges his energy at Mechagodzilla, sacrificing himself',
        options: [
            {
                text: 'Advance',
                nextText: 26
            },
			{
                text: 'Grab Mechagodzillas tail',
				setState: {TailWeapon: true},
                nextText: 26
            },
			
		]
	},
	{
		id: 29,
        text: 'Mechagodzillas rockets blow Rodan out of the sky, and the proton scream kills Kong',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 26,
        text: 'An ancient rivalry is set to be renewed, Kong and Godzilla cross paths, in their search for Ghidorah!',
        options: [
            {
                text: 'Intimidation display',
                nextText: 30
            },
			{
                text: 'Offer Teamup to fight Ghidorah',
                nextText: 31
            },
			{
                text: 'Charge',
                nextText: 32
            },
			{
                text: 'Mecha tail attack',
				requiredState: (currentState) => currentState.TailWeapon,
                nextText: 33
            }
		]
	},
	{
		id: 30,
        text: 'This infuriates Godzilla, he goes bezerk and is too much to handle!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 31,
        text: 'Godzilla refuses and knocks you out',
        options: [
            {
                text: 'Control Godzilla',
				setState: {KongKO: true},
                nextText: 38
            }
		]
	},
	{
		id: 32,
        text: 'You charge Godzilla',
        options: [
            {
                text: 'Punch and upper cut',
                nextText: 35
            },
			{
                text: 'Spear',
                nextText: 36
            }
		]
	},
	{
		id: 35,
        text: 'Godzilla bites your hand, and starts charging his atomic breath, you have to let go, then, The False King, Ghidorah arrives',
        options: [
            {
                text: 'Team up',
                nextText: 37
            }
		]
	},
	{
		id: 36,
        text: 'You spear Godzilla, and his head collides of a building, knocking him out',
        options: [
            {
                text: 'Advance',
				setState: {GodzillaKO: true},
                nextText: 34
            }
		]
	},
	{
		id: 33,
        text: 'How will you attack Godzilla with the tail?',
        options: [
            {
                text: 'Whip',
                nextText: 39
            },
			{
				text: 'Make the tail smaller, making a shorter range melee weapon',
				nextText: 40
			}
		]
	},
	{
		id: 39,
        text: 'Ineffective',
        options: [
            {
                text: 'Charge',
                nextText: 32
            },
			{
				text: 'Throw the tail',
				nextText: 41
			}
		]
	},
	{
		id: 40,
        text: 'How will you attack',
        options: [
            {
                text: 'Slash Godzillas chest',
                nextText: 42
            },
			{
				text: 'Lodge tail in Godzillas jaw',
				nextText: 43
			}
		]
	},
	{
		id: 41,
        text: 'Godzilla dodges and Ghidorah shows up',
        options: [
            {
                text: 'Team up!',
                nextText: 37
            }
		]
	},
	{
		id: 42,
        text: 'You stun Godzilla and the tail is blunt. Ghidorah shows up',
        options: [
            {
                text: 'Team up!',
				setState: {TailWeapon: false},
                nextText: 37
            }
		]
	},
	{
		id: 43,
        text: 'Godzilla charges his breath, and concentrates his atomic breath, roasting you',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 34,
        text: 'Ghidorah has shown up, you need to take him down! But you cant do it yourself, Ghidorah kills you',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 38,
        text: 'This is Godzillas chance to take the throne!',
        options: [
            {
                text: 'Charge, grab and bite',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 44
            },
			 {
                text: 'Use atomic breath',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 45
            }
		]
	},
	{
		id: 44,
        text: 'You have a grip on Ghidorahs middle head!',
        options: [
            {
                text: 'Rip head off',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 46
            },
			{
                text: 'Kiss of death',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 47
            }
		]
	},
	{
		id: 46,
        text: 'Ghidorahs heads singe your hands!',
        options: [
            {
                text: 'Atomic breath',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 48
            },
			{
                text: 'Tail whip',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 49
            }
		]
	},
	{
		id: 46,
        text: 'You stagger Ghidorah! Kong wakes up!',
        options: [
            {
                text: 'Join Godzilla',
				requiredState: (currentState) => currentState.KongKO,
                nextText: 37
            },
			{
                text: 'Join Godzilla',
				requiredState: (currentState) => currentState.TailWeapon,
                nextText: 37
            }
		]
	},
	{
		id: 48,
        text: 'You stagger Ghidorah! Kong wakes up!',
        options: [
            {
                text: 'Kong joins the fight',
                nextText: 37
            }
		]
	},
	{
		id: 49,
        text: 'You stagger Ghidorah! Kong wakes up!',
        options: [
            {
                text: 'Kong joins the fight',
                nextText: 37
            }
		]
	},
	{
		id: 37,
        text: 'Time to kill this false king!',
        options: [
            {
                text: 'Jump onto Ghidorah and bite one of the heads',
                nextText: 50
            },
			{
                text: 'Lodge tail in Ghidorahs mouth',
				requiredState: (currentState) => currentState.TailWeapon,
                nextText: 51
            }
		]
	},
	{
		id: 50,
        text: 'Choose your attack!',
        options: [
            {
                text: 'Tie heads together',
                nextText: 52
            },
			{
                text: 'Grab bottom jaw, and pull it like a banana peel',
				requiredState: (currentState) => currentState.TailWeapon,
                nextText: 53
            }
		]
	},
	{
		id: 52,
        text: 'Heads are tied together!',
        options: [
            {
                text: 'Choke out Ghidorah',
                nextText: 56
            },
			{
                text: 'Ground pound',
                nextText: 55
            }
		]
	},
	{
		id: 53,
        text: '1 head is down!',
        options: [
            {
                text: 'Signal Godzilla to break jaw',
                nextText: 56
            },
			{
                text: 'Stand on Ghidorahs chest',
                nextText: 57
            }
		]
	},
	{
		id: 55,
        text: 'Ghidorah is defeated! Godzilla and Kong face off',
        options: [
            {
                text: 'Roar in respect',
                nextText: 58
            }
		]
	},
	{
		id: 56,
        text: 'Ghidorah is defeated! Godzilla and Kong face off',
        options: [
            {
                text: 'Roar in respect',
                nextText: 58
            }
		]
	},
	{
		id: 57,
        text: 'Ghidorah uses his gravity beams to self destruct, killing you and Godzilla',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
		]
	},
	{
		id: 58,
        text: 'Congratulations, Godzilla and Kong are the guardians of Earth, they have vanquised the false king - Thank you for playing!',
        options: [
            {
                text: 'Play again',
                nextText: -1
            }
		]
	}
	
	
	
	
]

/* call the startGame() function */
startGame()
	

