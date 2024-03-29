import { useStorage } from "@vueuse/core";

export const adjectives = [
  "Active",
  "Adored",
  "Adulated",
  "Adventurous",
  "Affectionate",
  "Amused",
  "Amusing",
  "Antique",
  "Appreciated",
  "Archaic",
  "Ardent",
  "Astonished",
  "Audacious",
  "Awestruck",
  "Beaming",
  "Bewildered",
  "Bewitching",
  "Blissful",
  "Booming",
  "Bouncy",
  "Breathtaking",
  "Bright",
  "Brilliant",
  "Bubbling",
  "Calm",
  "Calming",
  "Celestial",
  "Charming",
  "Cheerful",
  "Cherished",
  "Chilled",
  "Comical",
  "Companionable",
  "Confident",
  "Courage",
  "Dancing",
  "Dazzling",
  "Delicate",
  "Delightful",
  "Demented",
  "Desirable",
  "Determined",
  "Devoted",
  "Dominant",
  "Elegant",
  "Enchanted",
  "Energetic",
  "Enthusiastic",
  "Ethereal",
  "Exaggerated",
  "Exalted",
  "Expectant",
  "Expressive",
  "Exuberant",
  "Faint",
  "Fantastical",
  "Favorable",
  "Feverish",
  "Fiery",
  "Floating",
  "Flying",
  "Folksy",
  "Fond",
  "Forgiven",
  "Forgiving",
  "Frenetic",
  "Funny",
  "Furry",
  "Galloping",
  "Gaping",
  "Gentle",
  "Giddy",
  "Glacial",
  "Gladness",
  "Gleaming",
  "Gleeful",
  "Gorgeous",
  "Graceful",
  "Grateful",
  "Halting",
  "Happy",
  "Haunting",
  "Heavenly",
  "Hidden",
  "Honor",
  "Hopeful",
  "Hopping",
  "Humble",
  "Hushed",
  "Hypnotic",
  "Illuminated",
  "Immense",
  "Imperious",
  "Impudent",
  "Innocent",
  "Inspired",
  "Intimate",
  "Intrepid",
  "Jagged",
  "Joking",
  "Joyful",
  "Jubilant",
  "Kindly",
  "Languid",
  "Laughable",
  "Lighthearted",
  "Limping",
  "Linear",
  "Evently",
  "Lofty",
  "Lovely",
  "Lulling",
  "Luminescent",
  "Lush",
  "Luxurious",
  "Magical",
  "Maniacal",
  "Manliness",
  "March-like",
  "Masterful",
  "Merciful",
  "Merry",
  "Mischievous",
  "Misty",
  "Modest",
  "Moonlit",
  "Mysterious",
  "Mystical",
  "Mythological",
  "Nebulous",
  "Nostalgic",
  "Overstated",
  "Partying",
  "Perplexed",
  "Playful",
  "Pleasurable",
  "Poignant",
  "Portentous",
  "Posh",
  "Powerful",
  "Pretty",
  "Prideful",
  "Princesslike",
  "Proud",
  "Puzzled",
  "Queenly",
  "Questing",
  "Quiet",
  "Ragged",
  "Rejoicing",
  "Relaxed",
  "Reserved",
  "Resolute",
  "Ridiculous",
  "Ritualistic",
  "Running",
  "Scampering",
  "Sensitive",
  "Serene",
  "Shaking",
  "Shining",
  "Silky",
  "Silly",
  "Simple",
  "Singing",
  "Skipping",
  "Smooth",
  "Sneaky",
  "Soaring",
  "Sophisticated",
  "Sparkling",
  "Spherical",
  "Splashing",
  "Splendid",
  "Spooky",
  "Sprinting",
  "Starlit",
  "Starry",
  "Startling",
  "Successful",
  "Summery",
  "Surprised",
  "Sympathetic",
  "Teasing",
  "Tender",
  "Thoughtful",
  "Thrilling",
  "Tingling",
  "Tinkling",
  "Touching",
  "Tranquil",
  "Treasured",
  "Trembling",
  "Triumphant",
  "Twinkling",
  "Unruly",
  "Urgent",
  "Veiled",
  "Velvety",
  "Victorious",
  "Vigorous",
  "Virile",
  "Walking",
  "Wild",
  "Witty",
  "Wondering",
];

export const animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

export function randomName() {
  return `${any(adjectives)} ${any(animals)}`;
}

export const useUserId = () => useStorage("elektron_user_id", randomString());

export const useUserName = () => useStorage("elektron_user_name", randomName());
