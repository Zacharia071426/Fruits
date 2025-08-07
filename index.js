const fruit = [
    "apple", "banana", "orange", "mango", "watermelon", "grape", "pineapple", "kiwi", "strawberry", "blueberry",
    "raspberry", "blackberry", "peach", "pear", "plum", "cherry", "pomegranate", "papaya", "guava", "lychee", 
    "dragonfruit", "coconut", "fig", "apricot", "passionfruit", "nectarine", "tangerine", "mandarin", "cantaloupe", 
    "melon", "persimmon", "starfruit", "jackfruit", "breadfruit", "kumquat", "dragon fruit", "salak", "soursop", 
    "longan", "clementine", "loquat", "miracle fruit", "carambola", "chico", "sanddune fruit", "bilberry", "honeydew", 
    "quince", "prickly pear", "mulberry", "jambolan", "elderberry", "medlar", "mangosteen", "tamarind", "barberry", 
    "raspberry", "currant", "redcurrant", "blackcurrant", "gooseberry", "cloudberry", "pawpaw", "yunnan hackberry", 
    "sapodilla", "green apple", "golden kiwi", "white mulberry", "red pear", "yellow pear", "blue grape", "green grape", 
    "black grape", "brown fig", "white peach", "yellow watermelon", "green mango", "pink guava", "yellow guava", 
    "purple grape", "pink lady apple", "soursop fruit", "lemon", "lime", "pomelo", "chili pepper", "avocado", 
    "tomato", "cucumber", "zucchini", "pumpkin", "eggplant", "artichoke", "bamboo shoots", "heirloom tomato", 
    "rosemary", "mint", "chives", "basil", "dandelion", "oregano", "lemon balm", "parsnip", "rhubarb", "okra"
];

function addFruit(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let randomNumber = Math.floor(Math.random()*fruit.length);
    let randomFruit = fruit[randomNumber]; 
    li.textContent = randomFruit;
    ul.appendChild(li);
}
