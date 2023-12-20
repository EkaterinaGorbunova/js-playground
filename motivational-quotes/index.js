const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    '"Learn as if you will live forever, live like you will die tomorrow." — Mahatma Gandhi',
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '"It is better to fail in originality than to succeed in imitation." — Herman Melville',
    '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
    '"Do not let yesterday take up too much of today." — Will Rogers',
    '"If you are working on something that you really care about, you do not have to be pushed. The vision pulls you." — Steve Jobs',
    '"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest." — Walter Anderson',
    '"When you change your thoughts, remember to also change your world." — Norman Vincent Peale',
    '"I never dreamed about success. I worked for it." — Estée Lauder',
    '"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind." — Mister Rogers',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"If you are going through hell, keep going." - Winston Churchill',
    '"To know how much there is to know is the beginning of learning to live." — Dorothy West',
    '"Experience is a hard teacher because she gives the test first, the lesson afterwards." ―Vernon Sanders Law',
    '"You have got to get up every morning with determination if you are going to go to bed with satisfaction." — George Lorimer',
    '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela',
    '"The most difficult thing is the decision to act, the rest is merely tenacity." — Amelia Earhart',
    '"You wll find that education is just about the only thing lying around loose in this world, and it is about the only thing a fellow can have as much of as he is willing to haul away." —John Graham',
    '"Take the attitude of a student, never be too big to ask questions, never know too much to learn something new." —Augustine Og Mandino',
    '"The elevator to success is out of order. You wll have to use the stairs, one step at a time." — Joe Girard',
    '"Be a positive energy trampoline - absorb what you need and rebound more back." — Dave Carolan',
    '"People often say that motivation does not last. Well, neither does bathing - that is why we recommend it daily." — Zig Ziglar',
    '"Work until your bank account looks like a phone number." — Unknown',
    '"I am so clever that sometimes I do not understand a single word of what I am saying." — Oscar Wilde',
    '"People say nothing is impossible, but I do nothing every day." — Winnie the Pooh',
    '"Life is like a sewer… what you get out of it depends on what you put into it." — Tom Lehrer',
    '"I always wanted to be somebody, but now I realise I should have been more specific." — Lily Tomlin',
];

button.addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = 'block';
    par.textContent = randomQuote;
});
