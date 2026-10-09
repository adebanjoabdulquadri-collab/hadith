quotes = [
  {
    quote:
      "Actions are judged by intentions, and every person will get what they intended.",
    author: "Sahih al-Bukhari",
  },
  {
    quote:
      "None of you truly believes until he loves for his brother what he loves for himself.",
    author: "Sahih al-Bukhari",
  },
  {
    quote:
      "The strong person is not the good wrestler, but the one who controls himself when angry.",
    author: "Sahih al-Bukhari",
  },
  {
    quote: "Kindness is a mark of faith, and whoever is not kind has no faith.",
    author: "Sahih Muslim",
  },
  {
    quote:
      "The best among you are those who have the best manners and character.",
    author: "Sahih al-Bukhari",
  },
  {
    quote: "A good word is charity.",
    author: "Sahih al-Bukhari",
  },
  {
    quote:
      "Make things easy for people and do not make them difficult; give glad tidings and do not repel them.",
    author: "Sahih al-Bukhari",
  },
  {
    quote:
      "Whoever believes in God and the Last Day should speak good or remain silent.",
    author: "Sahih al-Bukhari",
  },
  {
    quote: "Feed the hungry, visit the sick, and set free the captives.",
    author: "Sahih al-Bukhari",
  },
  {
    quote:
      "God does not look at your forms or your wealth, but He looks at your hearts and your deeds.",
    author: "Sahih Muslim",
  },
  {
    quote: "Seeking knowledge is an obligation upon every Muslim.",
    author: "Sunan Ibn Majah",
  },
  {
    quote: "The best of people are those who are most beneficial to others.",
    author: "Al-Mu'jam al-Awsat",
  },
  {
    quote:
      "Richness does not lie in an abundance of worldly goods, but in a contented soul.",
    author: "Sahih al-Bukhari",
  },
  {
    quote: "Purity is half of faith.",
    author: "Sahih Muslim",
  },
  {
    quote: "Do not waste water, even if you are at a running stream.",
    author: "Sunan Ibn Majah",
  },
  {
    quote:
      "Whoever takes a path upon which to seek knowledge, God will make the path to Paradise easy for him.",
    author: "Sahih Muslim",
  },
  {
    quote: "Your smile for your brother is a charity.",
    author: "Jami' at-Tirmidhi",
  },
  {
    quote: "A believer is a mirror to another believer.",
    author: "Sunan Abi Dawud",
  },
  {
    quote:
      "Be merciful to those on the earth, and the One above the heavens will have mercy upon you.",
    author: "Jami' at-Tirmidhi",
  },
  {
    quote:
      "Leave that which makes you doubtful for that which does not make you doubtful.",
    author: "Jami' at-Tirmidhi",
  },
];
const newHadith = document.querySelector("#new-quote");
console.log(newHadith);
const content = document.querySelector(".quote");
console.log(content);
const author = document.querySelector(".person");
console.log(author);

const hadithChanger = () => {
  const randomHadith = Math.floor(Math.random() * quotes.length);
  console.log(randomHadith);
  const recentHadith = (content.innerHTML = quotes[randomHadith].quote);
  const recentAuthor = (author.innerHTML = quotes[randomHadith].author);
};
newHadith.addEventListener("click", hadithChanger);
