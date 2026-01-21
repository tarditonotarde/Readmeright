export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  cover: string;
  justification: string;
  purchaseUrl: string;
}

export const bookDatabase: Book[] = [
  {
    id: 1,
    title: "The Stranger",
    author: "Albert Camus",
    genre: "Existential Fiction",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "For when you want to feel seen by a guy who literally killed someone because it was too sunny outside. Peak relatable.",
    purchaseUrl: "https://www.amazon.com/dp/0679720200"
  },
  {
    id: 2,
    title: "Convenience Store Woman",
    author: "Sayaka Murata",
    genre: "Contemporary",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Perfect for when you've mastered the art of pretending to be normal in public while being spectacularly weird at home.",
    purchaseUrl: "https://www.amazon.com/dp/0802128564"
  },
  {
    id: 3,
    title: "Catch-22",
    author: "Joseph Heller",
    genre: "Dark Comedy",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Because the only thing funnier than bureaucratic absurdity is realizing it's an accurate documentary of your own life.",
    purchaseUrl: "https://www.amazon.com/dp/1451626657"
  },
  {
    id: 4,
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Living the dream: sleeping through your problems with prescription drugs and a bodega sandwich budget. Aspirational content.",
    purchaseUrl: "https://www.amazon.com/dp/1101974184"
  },
  {
    id: 5,
    title: "The Bell Jar",
    author: "Sylvia Plath",
    genre: "Memoir",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Nothing says 'self-care' like reading about someone else's breakdown while you marinate in your own. Therapy is expensive, this is $12.",
    purchaseUrl: "https://www.amazon.com/dp/0061148512"
  },
  {
    id: 6,
    title: "Infinite Jest",
    author: "David Foster Wallace",
    genre: "Postmodern",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "1,000+ pages of footnotes and pain. For people who say 'destroy me intellectually' and actually mean it. Godspeed.",
    purchaseUrl: "https://www.amazon.com/dp/0316066524"
  },
  {
    id: 7,
    title: "The Metamorphosis",
    author: "Franz Kafka",
    genre: "Absurdist Fiction",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Perfect for days when you wake up feeling like a bug and your family's disappointment is palpable. Very on-brand for you.",
    purchaseUrl: "https://www.amazon.com/dp/0553213695"
  },
  {
    id: 8,
    title: "The Crying of Lot 49",
    author: "Thomas Pynchon",
    genre: "Mystery",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Conspiracy theories, paranoia, and no clear answers. Like your group chat at 3am but make it literary.",
    purchaseUrl: "https://www.amazon.com/dp/0060913061"
  },
  {
    id: 9,
    title: "Fight Club",
    author: "Chuck Palahniuk",
    genre: "Transgressive",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "For when your inner rage needs validation but you're too tired to actually punch anything. Violence as metaphor, chaos as vibe.",
    purchaseUrl: "https://www.amazon.com/dp/0393327345"
  },
  {
    id: 10,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Sci-Fi Comedy",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "The universe is meaningless and we're all going to die, but at least it's funny. Bring a towel and lower your expectations.",
    purchaseUrl: "https://www.amazon.com/dp/0345391802"
  },
  {
    id: 11,
    title: "No Longer Human",
    author: "Osamu Dazai",
    genre: "Psychological",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "The title says it all. You're not okay, the protagonist isn't okay, nobody's okay. Let's all be not okay together.",
    purchaseUrl: "https://www.amazon.com/dp/0811204812"
  },
  {
    id: 12,
    title: "Breakfast of Champions",
    author: "Kurt Vonnegut",
    genre: "Satire",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Perfect for days when you scratch your balls on the sofa, eat mandarins, and throw the peels on the floor to slowly nurture your inner Diogenes.",
    purchaseUrl: "https://www.amazon.com/dp/0385334206"
  },
  {
    id: 13,
    title: "White Noise",
    author: "Don DeLillo",
    genre: "Postmodern",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Death anxiety + consumer culture + academic pretension = your entire personality in novel form. You're welcome.",
    purchaseUrl: "https://www.amazon.com/dp/0140283706"
  },
  {
    id: 14,
    title: "The Trial",
    author: "Franz Kafka",
    genre: "Absurdist Fiction",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Being punished for crimes you don't understand by systems you can't comprehend. Like adulting but make it Kafka.",
    purchaseUrl: "https://www.amazon.com/dp/0805209999"
  },
  {
    id: 15,
    title: "American Psycho",
    author: "Bret Easton Ellis",
    genre: "Transgressive",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Capitalism is killing your soul but at least your business card is embossed. Disturbing, satirical, and unfortunately a vibe.",
    purchaseUrl: "https://www.amazon.com/dp/0679735771"
  },
  {
    id: 16,
    title: "Nausea",
    author: "Jean-Paul Sartre",
    genre: "Philosophy",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Existence is meaningless and trees are offensive. For when you want to philosophically justify your general disgust with everything.",
    purchaseUrl: "https://www.amazon.com/dp/0811220303"
  },
  {
    id: 17,
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    genre: "Philosophy",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "The original incel literature. A bitter man rants in his apartment for 150 pages. Somehow it's a masterpiece and also you.",
    purchaseUrl: "https://www.amazon.com/dp/0679734525"
  },
  {
    id: 18,
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    genre: "Anti-War",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Time is meaningless, death is inevitable, and aliens are watching. So it goes. So it goes. So it goes.",
    purchaseUrl: "https://www.amazon.com/dp/0385333846"
  },
  {
    id: 19,
    title: "The Plague",
    author: "Albert Camus",
    genre: "Existential Fiction",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Pandemic fiction written in 1947. Feels uncomfortably familiar. Read it and cry about how nothing has changed.",
    purchaseUrl: "https://www.amazon.com/dp/0679720219"
  },
  {
    id: 20,
    title: "A Confederacy of Dunces",
    author: "John Kennedy Toole",
    genre: "Satire",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "An insufferable genius thinks he's better than everyone. He's wrong but you'll relate anyway. Pure chaotic energy.",
    purchaseUrl: "https://www.amazon.com/dp/0802130208"
  },
  {
    id: 21,
    title: "Less Than Zero",
    author: "Bret Easton Ellis",
    genre: "Contemporary",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Rich kids doing drugs and feeling nothing. Emotional numbness as aesthetic. LA in the 80s but also your soul in 2026.",
    purchaseUrl: "https://www.amazon.com/dp/0679781498"
  },
  {
    id: 22,
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    genre: "Historical Fiction",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Repressed emotions and wasted potential. A butler realizes he fucked up his entire life. Too real. Devastatingly British.",
    purchaseUrl: "https://www.amazon.com/dp/0679731725"
  },
  {
    id: 23,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Bleak. Bleaker. Bleakest. The world ended and somehow it's still less depressing than your inbox.",
    purchaseUrl: "https://www.amazon.com/dp/0307387895"
  },
  {
    id: 24,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    genre: "Romance",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Sad Japanese college students, lots of sex, zero resolution. Like Murakami but less weird cats and more crying.",
    purchaseUrl: "https://www.amazon.com/dp/0375704027"
  },
  {
    id: 25,
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    genre: "Philosophy",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Sex, philosophy, and existential dread in Communist Prague. Heavy ideas about lightness. Ironically very heavy.",
    purchaseUrl: "https://www.amazon.com/dp/0061148520"
  },
  {
    id: 26,
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    genre: "Experimental",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "A book that physically fucks with you. Footnotes, upside-down text, and architectural horror. You asked for chaos, here's chaos.",
    purchaseUrl: "https://www.amazon.com/dp/0375703764"
  },
  {
    id: 27,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Gothic Fiction",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Narcissism, hedonism, and a painting that ages instead of you. Your skincare routine wishes it was this effective.",
    purchaseUrl: "https://www.amazon.com/dp/0141439572"
  },
  {
    id: 28,
    title: "Haunted",
    author: "Chuck Palahniuk",
    genre: "Horror",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Stories so disturbing people faint at readings. Contains 'Guts.' If you know, you know. If you don't, godspeed.",
    purchaseUrl: "https://www.amazon.com/dp/1400032822"
  },
  {
    id: 29,
    title: "The Vegetarian",
    author: "Han Kang",
    genre: "Psychological",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "A woman stops eating meat and society loses its shit. Body horror meets social commentary. Disturbing and beautiful.",
    purchaseUrl: "https://www.amazon.com/dp/1101906111"
  },
  {
    id: 30,
    title: "We Need to Talk About Kevin",
    author: "Lionel Shriver",
    genre: "Thriller",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "What if your kid is just... evil? Motherhood as horror story. Will make you rethink having children, or validate not having them.",
    purchaseUrl: "https://www.amazon.com/dp/006124672X"
  },
  {
    id: 31,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Surveillance state nightmare that's less fiction and more prophecy at this point. Your FBI agent reading this: hi!",
    purchaseUrl: "https://www.amazon.com/dp/0451524934"
  },
  {
    id: 32,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: "Dystopian Fiction",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Theocratic hellscape that feels closer every day. Read it before it becomes a documentary.",
    purchaseUrl: "https://www.amazon.com/dp/038549081X"
  },
  {
    id: 33,
    title: "Invisible Monsters",
    author: "Chuck Palahniuk",
    genre: "Transgressive",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Beauty, identity, and self-destruction. A supermodel with half a face questions everything. Peak Palahniuk chaos.",
    purchaseUrl: "https://www.amazon.com/dp/0393337901"
  },
  {
    id: 34,
    title: "The Virgin Suicides",
    author: "Jeffrey Eugenides",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Suburban ennui and teenage tragedy narrated by creepy neighbor boys. Hauntingly beautiful and deeply fucked up.",
    purchaseUrl: "https://www.amazon.com/dp/0312428294"
  },
  {
    id: 35,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Commit a murder, spiral into guilt for 500 pages. Russian literature at its most emotionally devastating. You'll love it.",
    purchaseUrl: "https://www.amazon.com/dp/0143058142"
  },
  {
    id: 36,
    title: "The Death of Ivan Ilyich",
    author: "Leo Tolstoy",
    genre: "Philosophy",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "A man dies slowly and realizes his entire life was meaningless. Short, brutal, and existentially horrifying. Enjoy!",
    purchaseUrl: "https://www.amazon.com/dp/1594485437"
  },
  {
    id: 37,
    title: "Perfume",
    author: "Patrick Süskind",
    genre: "Historical Horror",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "A serial killer who murders women to make perfume. Beautifully written, deeply disturbing. Like you!",
    purchaseUrl: "https://www.amazon.com/dp/0375725849"
  },
  {
    id: 38,
    title: "The Book of Disquiet",
    author: "Fernando Pessoa",
    genre: "Philosophy",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Fragmentary thoughts from a depressed Portuguese accountant. No plot, just vibes (bad vibes). Exquisitely melancholic.",
    purchaseUrl: "https://www.amazon.com/dp/0141183047"
  },
  {
    id: 39,
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    genre: "Western",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Unrelenting violence in poetic prose. The West wasn't won, it was butchered. Read it and question humanity.",
    purchaseUrl: "https://www.amazon.com/dp/0679728759"
  },
  {
    id: 40,
    title: "The Sound and the Fury",
    author: "William Faulkner",
    genre: "Southern Gothic",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Stream of consciousness from mentally disabled narrator. You'll be confused for 100 pages then cry. Classic Faulkner.",
    purchaseUrl: "https://www.amazon.com/dp/0679732241"
  },
  {
    id: 41,
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    genre: "Sci-Fi",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Clones raised for organ harvesting accept their fate with British politeness. Quietly devastating. Cry-in-public guarantee.",
    purchaseUrl: "https://www.amazon.com/dp/1400078776"
  },
  {
    id: 42,
    title: "Tender Is the Flesh",
    author: "Agustina Bazterrica",
    genre: "Dystopian",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Legal cannibalism as industry. Disturbing, visceral, will ruin your appetite. You asked for damage, here's damage.",
    purchaseUrl: "https://www.amazon.com/dp/1982150920"
  },
  {
    id: 43,
    title: "Disgrace",
    author: "J.M. Coetzee",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "A disgraced professor in post-apartheid South Africa faces consequences. Unflinching, uncomfortable, brilliant.",
    purchaseUrl: "https://www.amazon.com/dp/0140296042"
  },
  {
    id: 44,
    title: "The Glass Castle",
    author: "Jeannette Walls",
    genre: "Memoir",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Dysfunctional family memoir that'll make your childhood look stable. Traumatic but somehow inspiring. It's complicated.",
    purchaseUrl: "https://www.amazon.com/dp/074324754X"
  },
  {
    id: 45,
    title: "The Stranger Beside Me",
    author: "Ann Rule",
    genre: "True Crime",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Author worked with Ted Bundy at a crisis hotline. Didn't know he was a serial killer. Trust issues: activated.",
    purchaseUrl: "https://www.amazon.com/dp/1416559590"
  },
  {
    id: 46,
    title: "In Cold Blood",
    author: "Truman Capote",
    genre: "True Crime",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "The murder of a Kansas family told like literary fiction. Beautiful prose about horrible things. Classic American darkness.",
    purchaseUrl: "https://www.amazon.com/dp/0679745580"
  },
  {
    id: 47,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Isolation drives man insane, tries to murder family. Relatable work-from-home content. The book is better than the movie.",
    purchaseUrl: "https://www.amazon.com/dp/0307743659"
  },
  {
    id: 48,
    title: "The Goldfinch",
    author: "Donna Tartt",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "800 pages of trauma, art theft, and addiction. Beautifully written devastation. Commit to the length, it's worth the pain.",
    purchaseUrl: "https://www.amazon.com/dp/0316055441"
  },
  {
    id: 49,
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Toxic marriage, manipulation, and plot twists. Makes your relationship look healthy (or does it?). Unputdownable.",
    purchaseUrl: "https://www.amazon.com/dp/0307588378"
  },
  {
    id: 50,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "720 pages of unrelenting trauma. Will destroy you emotionally. Bring tissues, cancel plans, prepare to be wrecked.",
    purchaseUrl: "https://www.amazon.com/dp/0804172706"
  },
  {
    id: 51,
    title: "Lolita",
    author: "Vladimir Nabokov",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Beautifully written horror narrated by a monster. Makes you hate yourself for admiring the prose. Deeply uncomfortable.",
    purchaseUrl: "https://www.amazon.com/dp/0679723161"
  },
  {
    id: 52,
    title: "Play It As It Lays",
    author: "Joan Didion",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "LA actress has existential meltdown in episodic fragments. Numb, detached, drifting through life. Didion's bleak masterpiece.",
    purchaseUrl: "https://www.amazon.com/dp/0374529418"
  },
  {
    id: 53,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    genre: "Literary Fiction",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Indian family drama with forbidden love and tragic consequences. Lyrical prose that'll wreck you. Postcolonial heartbreak.",
    purchaseUrl: "https://www.amazon.com/dp/0812979656"
  },
  {
    id: 54,
    title: "Earthlings",
    author: "Sayaka Murata",
    genre: "Transgressive",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Makes Convenience Store Woman look normal. Escalates from weird to WHAT THE FUCK. Murata's unhinged masterpiece.",
    purchaseUrl: "https://www.amazon.com/dp/0802156592"
  },
  {
    id: 55,
    title: "Tampa",
    author: "Alissa Nutting",
    genre: "Transgressive",
    cover: "https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBkYXJrfGVufDF8fHx8MTc2ODkwOTY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Female teacher preys on male student. Darkly satirical, deeply disturbing. Not for everyone. Probably not for you either but here we are.",
    purchaseUrl: "https://www.amazon.com/dp/0062280597"
  },
  {
    id: 56,
    title: "Eileen",
    author: "Ottessa Moshfegh",
    genre: "Psychological",
    cover: "https://images.unsplash.com/photo-1723220217551-5b5a8a578758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk5NzE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Miserable woman in 1960s New England finally does something interesting. Moshfegh's grimy brilliance strikes again.",
    purchaseUrl: "https://www.amazon.com/dp/0143128752"
  },
  {
    id: 57,
    title: "The Secret History",
    author: "Donna Tartt",
    genre: "Mystery",
    cover: "https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzY4OTk3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Rich college kids study classics, commit murder, spiral. Dark academia before it was a TikTok aesthetic. Still iconic.",
    purchaseUrl: "https://www.amazon.com/dp/1400031702"
  },
  {
    id: 58,
    title: "The Wasp Factory",
    author: "Iain Banks",
    genre: "Horror",
    cover: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2ODk4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Teen psychopath on Scottish island kills small animals and relatives. Twisted, darkly funny, unforgettable twist ending.",
    purchaseUrl: "https://www.amazon.com/dp/0684853154"
  },
  {
    id: 59,
    title: "Exquisite Corpse",
    author: "Poppy Z. Brite",
    genre: "Horror",
    cover: "https://images.unsplash.com/photo-1633580969828-e069e568928f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3ZlbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg5MTA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Serial killers, necrophilia, extreme gore. If you read this in public, people will judge you. Proceed with caution.",
    purchaseUrl: "https://www.amazon.com/dp/1451651961"
  },
  {
    id: 60,
    title: "The Talented Mr. Ripley",
    author: "Patricia Highsmith",
    genre: "Thriller",
    cover: "https://images.unsplash.com/photo-1695121435869-11f4791315b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlJTIwYm9va3xlbnwxfHx8fDE3Njg5OTcxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    justification: "Identity theft, murder, and sociopathic charm. Tom Ripley is terrible and you'll root for him anyway. Highsmith is a genius.",
    purchaseUrl: "https://www.amazon.com/dp/0099282879"
  }
];

// Algorithm to select 3 books based on answers
export function getBookRecommendations(answers: number[]): Book[] {
  const mood = answers[0]; // How are you holding up
  const posture = answers[1]; // Reading posture
  const flavor = answers[2]; // Mental flavor
  const effort = answers[3]; // Effort tolerance
  const damage = answers[4]; // Type of damage
  
  const recommendations: Book[] = [];
  const usedIndices = new Set<number>();
  
  // Helper function to get a random book from a genre pool
  const getRandomBookFromPool = (indices: number[]): Book => {
    const availableIndices = indices.filter(i => !usedIndices.has(i));
    if (availableIndices.length === 0) {
      // Fallback: pick any unused book
      const allUnused = bookDatabase.filter((_, i) => !usedIndices.has(i));
      const randomBook = allUnused[Math.floor(Math.random() * allUnused.length)];
      usedIndices.add(bookDatabase.indexOf(randomBook));
      return randomBook;
    }
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedIndices.add(randomIndex);
    return bookDatabase[randomIndex];
  };
  
  // First book - based on mental flavor and damage type
  let firstBookPool: number[] = [];
  if (flavor === 0 || damage === 1) {
    // Existential dread / Emotional devastation
    firstBookPool = [0, 4, 10, 15, 16, 18, 22, 35, 36, 40, 49]; // Existential & emotional heavy hitters
  } else if (flavor === 1 || damage === 0) {
    // Weaponized sarcasm / Dark humor
    firstBookPool = [2, 3, 9, 11, 12, 19, 27, 32, 56]; // Dark comedy & satire
  } else if (flavor === 2) {
    // Delusional optimism
    firstBookPool = [9, 23, 24, 30, 53]; // Absurd & quirky
  } else {
    // Unprocessed trauma / Book that knows too much
    firstBookPool = [10, 27, 28, 33, 37, 41, 49, 58]; // Dark psychological
  }
  recommendations.push(getRandomBookFromPool(firstBookPool));
  
  // Second book - based on effort level
  let secondBookPool: number[] = [];
  if (effort === 3) {
    // Destroy me intellectually
    secondBookPool = [5, 12, 24, 25, 37, 38, 39, 47, 50, 56]; // Dense & challenging
  } else if (effort === 0 || effort === 1) {
    // Zero/Minimal effort
    secondBookPool = [1, 3, 6, 16, 20, 28, 43, 48]; // Accessible but impactful
  } else {
    // I can focus but I'll complain
    secondBookPool = [7, 13, 14, 21, 26, 34, 44, 51, 59]; // Medium intensity
  }
  recommendations.push(getRandomBookFromPool(secondBookPool));
  
  // Third book - based on mood, posture, and damage
  let thirdBookPool: number[] = [];
  if (posture === 0 || mood === 1) {
    // Rotting on couch / Emotionally dead
    thirdBookPool = [3, 20, 22, 29, 31, 41, 52, 55]; // Low energy, high impact
  } else if (damage === 2) {
    // Absurd unhinged nonsense
    thirdBookPool = [7, 8, 17, 25, 26, 53, 57]; // Weird & experimental
  } else if (damage === 3) {
    // A book that knows too much about me
    thirdBookPool = [10, 11, 16, 34, 40, 42, 45, 46, 54]; // Uncomfortably relatable
  } else {
    // General chaos
    thirdBookPool = [8, 14, 18, 30, 32, 35, 58, 59]; // Mix of everything dark
  }
  recommendations.push(getRandomBookFromPool(thirdBookPool));
  
  return recommendations;
}
