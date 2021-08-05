const quotes = [
    {
        quote: "Men are born to succeed, not fail.",
        author: "Henry David Thoreau"
    },
    {
        quote: "It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow.",
        author: "Robert Hutchings Goddard"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        quote: "Every adventure requires a first step.",
        author: "Cheshire cat, Alice In Wonderland"
    },
    {
        quote: "The very things that hold you down are going to lift you up.",
        author: "Timothy mouse, Dumbo"
    },
    {
        quote: "What keeps people going when things are going badly is their passion for their work.",
        author: "anonymous"
    },
    {
        quote: "Successful people are not gifted; they just work hard, then succeed on purpose.",
        author: "G.K. Nielson"
    },
    {
        quote: "If you walk the footstpes of a stranger, you'll learn things you never know, you never knew.",
        author: "Pocahontas, Disney"
    },
    {
        quote: "I never look back, It distrats from the now.",
        author: "Edna Mode, The incredibles"
    },
    {
        quote: "Don't give up, the storm ends.",
        author: "Charlie Mackesy"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
