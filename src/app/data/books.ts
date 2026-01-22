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
  { id: 1, title: "The Stranger", author: "Albert Camus", genre: "Existential Fiction", cover: "https://covers.openlibrary.org/b/isbn/0679720200-L.jpg", justification: "For when you want to feel seen by a guy who literally killed someone because it was too sunny outside. Peak relatable.", purchaseUrl: "https://www.amazon.com/s?k=The+Stranger+Albert+Camus" },
  { id: 2, title: "Convenience Store Woman", author: "Sayaka Murata", genre: "Contemporary", cover: "https://covers.openlibrary.org/b/isbn/0802128564-L.jpg", justification: "Perfect for when you've mastered the art of pretending to be normal in public while being spectacularly weird at home.", purchaseUrl: "https://www.amazon.com/s?k=Convenience+Store+Woman+Sayaka+Murata" },
  { id: 3, title: "Catch-22", author: "Joseph Heller", genre: "Dark Comedy", cover: "https://covers.openlibrary.org/b/isbn/1451626657-L.jpg", justification: "Because the only thing funnier than bureaucratic absurdity is realizing it's an accurate documentary of your own life.", purchaseUrl: "https://www.amazon.com/s?k=Catch-22+Joseph+Heller" },
  { id: 4, title: "My Year of Rest and Relaxation", author: "Ottessa Moshfegh", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/1101974184-L.jpg", justification: "Living the dream: sleeping through your problems with prescription drugs and a bodega sandwich budget. Aspirational content.", purchaseUrl: "https://www.amazon.com/s?k=My+Year+of+Rest+and+Relaxation+Ottessa+Moshfegh" },
  { id: 5, title: "The Bell Jar", author: "Sylvia Plath", genre: "Memoir", cover: "https://covers.openlibrary.org/b/isbn/0061148512-L.jpg", justification: "Nothing says 'self-care' like reading about someone else's breakdown while you marinate in your own.", purchaseUrl: "https://www.amazon.com/s?k=The+Bell+Jar+Sylvia+Plath" },
  { id: 6, title: "Infinite Jest", author: "David Foster Wallace", genre: "Postmodern", cover: "https://covers.openlibrary.org/b/isbn/0316066524-L.jpg", justification: "1,000+ pages of footnotes and pain.", purchaseUrl: "https://www.amazon.com/s?k=Infinite+Jest+David+Foster+Wallace" },
  { id: 7, title: "The Metamorphosis", author: "Franz Kafka", genre: "Absurdist Fiction", cover: "https://covers.openlibrary.org/b/isbn/0553213695-L.jpg", justification: "Perfect for days when you wake up feeling like a bug.", purchaseUrl: "https://www.amazon.com/s?k=The+Metamorphosis+Franz+Kafka" },
  { id: 8, title: "The Crying of Lot 49", author: "Thomas Pynchon", genre: "Mystery", cover: "https://covers.openlibrary.org/b/isbn/0060913061-L.jpg", justification: "Conspiracy theories, paranoia, and no clear answers.", purchaseUrl: "https://www.amazon.com/s?k=The+Crying+of+Lot+49+Thomas+Pynchon" },
  { id: 9, title: "Fight Club", author: "Chuck Palahniuk", genre: "Transgressive", cover: "https://covers.openlibrary.org/b/isbn/0393327345-L.jpg", justification: "For when your inner rage needs validation.", purchaseUrl: "https://www.amazon.com/s?k=Fight+Club+Chuck+Palahniuk" },
  { id: 10, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Sci-Fi Comedy", cover: "https://covers.openlibrary.org/b/isbn/0345391802-L.jpg", justification: "The universe is meaningless, but funny.", purchaseUrl: "https://www.amazon.com/s?k=The+Hitchhiker%27s+Guide+to+the+Galaxy+Douglas+Adams" },

  { id: 11, title: "No Longer Human", author: "Osamu Dazai", genre: "Psychological", cover: "https://covers.openlibrary.org/b/isbn/0811204812-L.jpg", justification: "The title says it all.", purchaseUrl: "https://www.amazon.com/s?k=No+Longer+Human+Osamu+Dazai" },
  { id: 12, title: "Breakfast of Champions", author: "Kurt Vonnegut", genre: "Satire", cover: "https://covers.openlibrary.org/b/isbn/0385334206-L.jpg", justification: "Diogenes-core.", purchaseUrl: "https://www.amazon.com/s?k=Breakfast+of+Champions+Kurt+Vonnegut" },
  { id: 13, title: "White Noise", author: "Don DeLillo", genre: "Postmodern", cover: "https://covers.openlibrary.org/b/isbn/0140283706-L.jpg", justification: "Death anxiety + consumer culture.", purchaseUrl: "https://www.amazon.com/s?k=White+Noise+Don+DeLillo" },
  { id: 14, title: "The Trial", author: "Franz Kafka", genre: "Absurdist Fiction", cover: "https://covers.openlibrary.org/b/isbn/0805209999-L.jpg", justification: "Like adulting but make it Kafka.", purchaseUrl: "https://www.amazon.com/s?k=The+Trial+Franz+Kafka" },
  { id: 15, title: "American Psycho", author: "Bret Easton Ellis", genre: "Transgressive", cover: "https://covers.openlibrary.org/b/isbn/0679735771-L.jpg", justification: "Capitalism is killing your soul.", purchaseUrl: "https://www.amazon.com/s?k=American+Psycho+Bret+Easton+Ellis" },

  { id: 16, title: "Nausea", author: "Jean-Paul Sartre", genre: "Philosophy", cover: "https://covers.openlibrary.org/b/isbn/0811220303-L.jpg", justification: "Existence is offensive.", purchaseUrl: "https://www.amazon.com/s?k=Nausea+Jean-Paul+Sartre" },
  { id: 17, title: "Notes from Underground", author: "Fyodor Dostoevsky", genre: "Philosophy", cover: "https://covers.openlibrary.org/b/isbn/0679734525-L.jpg", justification: "The original incel literature.", purchaseUrl: "https://www.amazon.com/s?k=Notes+from+Underground+Fyodor+Dostoevsky" },
  { id: 18, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Anti-War", cover: "https://covers.openlibrary.org/b/isbn/0385333846-L.jpg", justification: "So it goes.", purchaseUrl: "https://www.amazon.com/s?k=Slaughterhouse-Five+Kurt+Vonnegut" },
  { id: 19, title: "The Plague", author: "Albert Camus", genre: "Existential Fiction", cover: "https://covers.openlibrary.org/b/isbn/0679720219-L.jpg", justification: "Nothing has changed.", purchaseUrl: "https://www.amazon.com/s?k=The+Plague+Albert+Camus" },
  { id: 20, title: "A Confederacy of Dunces", author: "John Kennedy Toole", genre: "Satire", cover: "https://covers.openlibrary.org/b/isbn/0802130208-L.jpg", justification: "Pure chaotic energy.", purchaseUrl: "https://www.amazon.com/s?k=A+Confederacy+of+Dunces+John+Kennedy+Toole" },

  { id: 21, title: "Less Than Zero", author: "Bret Easton Ellis", genre: "Contemporary", cover: "https://covers.openlibrary.org/b/isbn/0679781498-L.jpg", justification: "Emotional numbness as aesthetic.", purchaseUrl: "https://www.amazon.com/s?k=Less+Than+Zero+Bret+Easton+Ellis" },
  { id: 22, title: "The Remains of the Day", author: "Kazuo Ishiguro", genre: "Historical Fiction", cover: "https://covers.openlibrary.org/b/isbn/0679731725-L.jpg", justification: "Devastatingly British.", purchaseUrl: "https://www.amazon.com/s?k=The+Remains+of+the+Day+Kazuo+Ishiguro" },
  { id: 23, title: "The Road", author: "Cormac McCarthy", genre: "Post-Apocalyptic", cover: "https://covers.openlibrary.org/b/isbn/0307387895-L.jpg", justification: "Bleakest timeline.", purchaseUrl: "https://www.amazon.com/s?k=The+Road+Cormac+McCarthy" },
  { id: 24, title: "Norwegian Wood", author: "Haruki Murakami", genre: "Romance", cover: "https://covers.openlibrary.org/b/isbn/0375704027-L.jpg", justification: "Sad Japanese college students.", purchaseUrl: "https://www.amazon.com/s?k=Norwegian+Wood+Haruki+Murakami" },
  { id: 25, title: "The Unbearable Lightness of Being", author: "Milan Kundera", genre: "Philosophy", cover: "https://covers.openlibrary.org/b/isbn/0061148520-L.jpg", justification: "Ironically very heavy.", purchaseUrl: "https://www.amazon.com/s?k=The+Unbearable+Lightness+of+Being+Milan+Kundera" },

  { id: 26, title: "House of Leaves", author: "Mark Z. Danielewski", genre: "Experimental", cover: "https://covers.openlibrary.org/b/isbn/0375703764-L.jpg", justification: "Architectural horror.", purchaseUrl: "https://www.amazon.com/s?k=House+of+Leaves+Mark+Z.+Danielewski" },
  { id: 27, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic Fiction", cover: "https://covers.openlibrary.org/b/isbn/0141439572-L.jpg", justification: "Your skincare routine wishes.", purchaseUrl: "https://www.amazon.com/s?k=The+Picture+of+Dorian+Gray+Oscar+Wilde" },
  { id: 28, title: "Haunted", author: "Chuck Palahniuk", genre: "Horror", cover: "https://covers.openlibrary.org/b/isbn/1400032822-L.jpg", justification: "Contains Guts.", purchaseUrl: "https://www.amazon.com/s?k=Haunted+Chuck+Palahniuk" },
  { id: 29, title: "The Vegetarian", author: "Han Kang", genre: "Psychological", cover: "https://covers.openlibrary.org/b/isbn/1101906111-L.jpg", justification: "Disturbing and beautiful.", purchaseUrl: "https://www.amazon.com/s?k=The+Vegetarian+Han+Kang" },
  { id: 30, title: "We Need to Talk About Kevin", author: "Lionel Shriver", genre: "Thriller", cover: "https://covers.openlibrary.org/b/isbn/0062119044-L.jpg", justification: "Motherhood as horror.", purchaseUrl: "https://www.amazon.com/s?k=We+Need+to+Talk+About+Kevin+Lionel+Shriver" },

  { id: 31, title: "1984", author: "George Orwell", genre: "Dystopian Fiction", cover: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg", justification: "Your FBI agent says hi.", purchaseUrl: "https://www.amazon.com/s?k=1984+George+Orwell" },
  { id: 32, title: "The Handmaid's Tale", author: "Margaret Atwood", genre: "Dystopian Fiction", cover: "https://covers.openlibrary.org/b/isbn/038549081X-L.jpg", justification: "Feels closer every day.", purchaseUrl: "https://www.amazon.com/s?k=The+Handmaid%27s+Tale+Margaret+Atwood" },
  { id: 33, title: "Invisible Monsters", author: "Chuck Palahniuk", genre: "Transgressive", cover: "https://covers.openlibrary.org/b/isbn/0393337901-L.jpg", justification: "Peak Palahniuk chaos.", purchaseUrl: "https://www.amazon.com/s?k=Invisible+Monsters+Chuck+Palahniuk" },
  { id: 34, title: "The Virgin Suicides", author: "Jeffrey Eugenides", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0312428294-L.jpg", justification: "Hauntingly beautiful.", purchaseUrl: "https://www.amazon.com/s?k=The+Virgin+Suicides+Jeffrey+Eugenides" },
  { id: 35, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological", cover: "https://covers.openlibrary.org/b/isbn/0143058142-L.jpg", justification: "500 pages of guilt.", purchaseUrl: "https://www.amazon.com/s?k=Crime+and+Punishment+Fyodor+Dostoevsky" },

  { id: 36, title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", genre: "Philosophy", cover: "https://covers.openlibrary.org/b/isbn/1594485437-L.jpg", justification: "Existentially horrifying.", purchaseUrl: "https://www.amazon.com/s?k=The+Death+of+Ivan+Ilyich+Leo+Tolstoy" },
  { id: 37, title: "Perfume", author: "Patrick Süskind", genre: "Historical Horror", cover: "https://covers.openlibrary.org/b/isbn/0375725849-L.jpg", justification: "Beautifully disturbing.", purchaseUrl: "https://www.amazon.com/s?k=Perfume+Patrick+Suskind" },
  { id: 38, title: "The Book of Disquiet", author: "Fernando Pessoa", genre: "Philosophy", cover: "https://covers.openlibrary.org/b/isbn/0141183047-L.jpg", justification: "Exquisitely melancholic.", purchaseUrl: "https://www.amazon.com/s?k=The+Book+of+Disquiet+Fernando+Pessoa" },
  { id: 39, title: "Blood Meridian", author: "Cormac McCarthy", genre: "Western", cover: "https://covers.openlibrary.org/b/isbn/0679728759-L.jpg", justification: "Unrelenting violence.", purchaseUrl: "https://www.amazon.com/s?k=Blood+Meridian+Cormac+McCarthy" },
  { id: 40, title: "The Sound and the Fury", author: "William Faulkner", genre: "Southern Gothic", cover: "https://covers.openlibrary.org/b/isbn/0679732241-L.jpg", justification: "Then cry.", purchaseUrl: "https://www.amazon.com/s?k=The+Sound+and+the+Fury+William+Faulkner" },

  { id: 41, title: "Never Let Me Go", author: "Kazuo Ishiguro", genre: "Sci-Fi", cover: "https://covers.openlibrary.org/b/isbn/1400078776-L.jpg", justification: "Quietly devastating.", purchaseUrl: "https://www.amazon.com/s?k=Never+Let+Me+Go+Kazuo+Ishiguro" },
  { id: 42, title: "Tender Is the Flesh", author: "Agustina Bazterrica", genre: "Dystopian", cover: "https://covers.openlibrary.org/b/isbn/1982150920-L.jpg", justification: "Will ruin your appetite.", purchaseUrl: "https://www.amazon.com/s?k=Tender+Is+the+Flesh+Agustina+Bazterrica" },
  { id: 43, title: "Disgrace", author: "J.M. Coetzee", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0140296042-L.jpg", justification: "Uncomfortable brilliance.", purchaseUrl: "https://www.amazon.com/s?k=Disgrace+J.M.+Coetzee" },
  { id: 44, title: "The Glass Castle", author: "Jeannette Walls", genre: "Memoir", cover: "https://covers.openlibrary.org/b/isbn/074324754X-L.jpg", justification: "Traumatic but inspiring.", purchaseUrl: "https://www.amazon.com/s?k=The+Glass+Castle+Jeannette+Walls" },
  { id: 45, title: "The Stranger Beside Me", author: "Ann Rule", genre: "True Crime", cover: "https://covers.openlibrary.org/b/isbn/1416559590-L.jpg", justification: "Trust issues activated.", purchaseUrl: "https://www.amazon.com/s?k=The+Stranger+Beside+Me+Ann+Rule" },

  { id: 46, title: "In Cold Blood", author: "Truman Capote", genre: "True Crime", cover: "https://covers.openlibrary.org/b/isbn/0679745580-L.jpg", justification: "Classic American darkness.", purchaseUrl: "https://www.amazon.com/s?k=In+Cold+Blood+Truman+Capote" },
  { id: 47, title: "The Shining", author: "Stephen King", genre: "Horror", cover: "https://covers.openlibrary.org/b/isbn/0307743659-L.jpg", justification: "Relatable WFH content.", purchaseUrl: "https://www.amazon.com/s?k=The+Shining+Stephen+King" },
  { id: 48, title: "The Goldfinch", author: "Donna Tartt", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0316055441-L.jpg", justification: "Worth the pain.", purchaseUrl: "https://www.amazon.com/s?k=The+Goldfinch+Donna+Tartt" },
  { id: 49, title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", cover: "https://covers.openlibrary.org/b/isbn/0307588378-L.jpg", justification: "Unputdownable.", purchaseUrl: "https://www.amazon.com/s?k=Gone+Girl+Gillian+Flynn" },
  { id: 50, title: "A Little Life", author: "Hanya Yanagihara", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0804172706-L.jpg", justification: "Emotional destruction.", purchaseUrl: "https://www.amazon.com/s?k=A+Little+Life+Hanya+Yanagihara" },

  { id: 51, title: "Lolita", author: "Vladimir Nabokov", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0679723161-L.jpg", justification: "Deeply uncomfortable.", purchaseUrl: "https://www.amazon.com/s?k=Lolita+Vladimir+Nabokov" },
  { id: 52, title: "Play It As It Lays", author: "Joan Didion", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0374529418-L.jpg", justification: "Didion bleakness.", purchaseUrl: "https://www.amazon.com/s?k=Play+It+As+It+Lays+Joan+Didion" },
  { id: 53, title: "The God of Small Things", author: "Arundhati Roy", genre: "Literary Fiction", cover: "https://covers.openlibrary.org/b/isbn/0812979656-L.jpg", justification: "Postcolonial heartbreak.", purchaseUrl: "https://www.amazon.com/s?k=The+God+of+Small+Things+Arundhati+Roy" },
  { id: 54, title: "Earthlings", author: "Sayaka Murata", genre: "Transgressive", cover: "https://covers.openlibrary.org/b/isbn/0802156592-L.jpg", justification: "WHAT THE FUCK.", purchaseUrl: "https://www.amazon.com/s?k=Earthlings+Sayaka+Murata" },
  { id: 55, title: "Tampa", author: "Alissa Nutting", genre: "Transgressive", cover: "https://covers.openlibrary.org/b/isbn/0062280597-L.jpg", justification: "Darkly disturbing.", purchaseUrl: "https://www.amazon.com/s?k=Tampa+Alissa+Nutting" },

  { id: 56, title: "Eileen", author: "Ottessa Moshfegh", genre: "Psychological", cover: "https://covers.openlibrary.org/b/isbn/0143128752-L.jpg", justification: "Grimy brilliance.", purchaseUrl: "https://www.amazon.com/s?k=Eileen+Ottessa+Moshfegh" },
  { id: 57, title: "The Secret History", author: "Donna Tartt", genre: "Mystery", cover: "https://covers.openlibrary.org/b/isbn/1400031702-L.jpg", justification: "Dark academia icon.", purchaseUrl: "https://www.amazon.com/s?k=The+Secret+History+Donna+Tartt" },
  { id: 58, title: "The Wasp Factory", author: "Iain Banks", genre: "Horror", cover: "https://covers.openlibrary.org/b/isbn/0684853154-L.jpg", justification: "Twisted and unforgettable.", purchaseUrl: "https://www.amazon.com/s?k=The+Wasp+Factory+Iain+Banks" },
  { id: 59, title: "Exquisite Corpse", author: "Poppy Z. Brite", genre: "Horror", cover: "https://covers.openlibrary.org/b/isbn/1451651961-L.jpg", justification: "Extreme gore.", purchaseUrl: "https://www.amazon.com/s?k=Exquisite+Corpse+Poppy+Z.+Brite" },
  { id: 60, title: "The Talented Mr. Ripley", author: "Patricia Highsmith", genre: "Thriller", cover: "https://covers.openlibrary.org/b/isbn/0099282879-L.jpg", justification: "Sociopathic charm.", purchaseUrl: "https://www.amazon.com/s?k=The+Talented+Mr.+Ripley+Patricia+Highsmith" }
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
