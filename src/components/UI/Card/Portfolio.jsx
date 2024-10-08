import Item from "./Item";

const portfolio = [
  {
    id: 1,
    title: "Cosmic Quest",
    kind: "Group Project",
    description: "Text based space adventure game",
    tools: ["React", "Node.js", "Mongodb", "Mongoose", "RESTful APIs"],
    repo: "https://github.com/jreeve65/Cosmic-Quest",
    live: "https://cosmic-quest.onrender.com/",
    img: "/images/cq.png",
    gif:"/images/cqGif.gif"
  },
  {
    id: 2,
    title: "Shelfie",
    kind: "Group Project",
    tools: [
      "Handlebars",
      "Node.js",
      "PostgreSQL",
      "Google Books API",
      "RESTful APIs",
    ],
    description: "Keep track of books in your collection",
    repo: "https://github.com/hestrain/shelfie",
    live: "https://shelfie-53sl.onrender.com/",
    img: "/images/shelfie screencap.png",
  },
  {
    id: 4,
    title: "Dog Care Guide",
    kind: "Solo",
    description:
      "A website with instructions for how to take care of my dog. Also includes her trick reel.",
    tools: ["React", "Node.js", " Bootstrap"],
    repo: "https://github.com/hestrain/Paprika-Care-Guide",
    live: "https://paprika-care-guide-1.onrender.com/",
    img: "/images/paprika screencap.png",
  },
  {
    id: 7,
    title: "Google form PDF Maker",
    kind: "Solo",
    description:
      "Automated tool for Stage Managers, Stage Supervisors, Front of House Managers etc to turn a google form report of an event into a ready-to-send PDF",
    tools: ["Google Apps Script"],
    repo: "https://github.com/hestrain/Gdrive-Form-Sheet-Pdf-Email",
    live: "",
    gif: "/images/form2PDF.gif",
  },
  {
    id: 3,
    title: "Mov.ie",
    kind: "Group Project",
    description: "Search for movies and find out where they're streaming.",
    tools: ["Javascript", "RESTful APIs", "Tailwind"],
    repo: "https://github.com/hestrain/mov.ie",
    live: "https://hestrain.github.io/mov.ie/",
    img: "/images/movie-screencap.png",
    gif: "/images/mov.ie.gif",
  },
  {
    id: 5,
    title: "Blog",
    kind: "Solo",
    description: "its a basic blog with a dark/light theme",
    tools: ["Node.js", "Bootstrap"],
    repo: "https://github.com/hestrain/my-first-blog",
    live: "https://hestrain.github.io/My-First-Blog",
    img: "/images/blog screencap.png",
    gif: "/images/blog.gif",
  },
  {
    id: 6,
    title: "Pokemon Type Site",
    kind: "Solo",
    description: "Made for my friends who don't like to read the whole chart ",
    tools: ["HTML5", "CSS"],
    repo: "https://github.com/hestrain/Pokemon-Types-2",
    live: "https://hestrain.github.io/Pokemon-Types-2/",
    img: "/images/pokemon type cap.png",
    gif: "/images/pokemon.gif",
  },
];

function PortfolioCard() {
  return <Item portfolio={portfolio} />;
}

export default PortfolioCard;
