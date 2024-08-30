import Item from "./Item"

const portfolio = [
    {
        id: 1,
        title: "Shelfie",
        kind:"Group Project",
        description: "Keep track of books in your collection",
        repo:"https://github.com/hestrain/shelfie",
        live:"https://shelfie-53sl.onrender.com/",
        img:"/./src/components/images/shelfie screencap.png"
    },
    {
        id: 2,
        title: "Mov.ie",
        kind:"Group Project",
        description: "KSearch for movies and find out where they're streaming.",
        repo:"https://github.com/hestrain/mov.ie",
        live:"https://hestrain.github.io/mov.ie/",
        img:"/./src/components/images/movie-screencap.png"
    },
    {
        id: 3,
        title: "Awful Weather Dashboard",
        kind:"Solo",
        description: "You can look up the weather... But Watch Out! it doesn't look great",
        repo:"https://github.com/hestrain/Weather-Station",
        live:"https://hestrain.github.io/Weather-Station/",
        img:"/./src/components/images/weather screencap.png"
    },
    {
        id: 4,
        title: "Pokemon Type Site",
        kind:"Solo",
        description: "Made for my friends who dont like to read the whole chart ",
        repo:"https://github.com/hestrain/Pokemon-Types-2",
        live:"https://hestrain.github.io/Pokemon-Types-2/",
        img:"/./src/components/images/pokemon type cap.png"
    },
    {
        id: 5,
        title: "Blog",
        kind:"Solo",
        description: "its a basic blog with a dark/light theme",
        repo:"https://github.com/hestrain/my-first-blog",
        live:"https://hestrain.github.io/my-first-blog",
        img:"/./src/components/images/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 6,
        title: "Something Else",
        kind:"Solo",
        description: "TBD",
        repo:"",
        live:"",
        img:"/./src/components/images/landscape-placeholder-svgrepo-com.svg"
    }
];

function PortfolioCard() {
    return <Item portfolio={portfolio} />
}

export default PortfolioCard;