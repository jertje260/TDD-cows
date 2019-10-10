import { Cow } from "../src/cow";
const cow = new Cow();

it("Given a cow without input, it should say 'Hello world!'", () => {
    const output = cow.Speak();

    expect(output)
        .toBe(
`/ Hello world! \\
\\              /
 --------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`);

});

it("Given a cow with 'jeroen' as input, should print 'jeroen'", () => {
    const output = cow.Speak("jeroen");

    expect(output)
        .toBe(
`/ Hello jeroen! \\
\\               /
 ---------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`);
});

it("Given a cow with 'sander' as input, should print 'sander'", () => {
    const output = cow.Speak("sander");

    expect(output)
        .toBe(
`/ Hello sander! \\
\\               /
 ---------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`);
});

it("Given a very long name: 'thisismyverylongname' it should print the name with proper sizing", () =>{
    const output = cow.Speak("thisismyverylongname");

    expect(output)
        .toBe(
`/ Hello thisismyverylongname! \\
\\                             /
 -----------------------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`);
});

it("Given 'This is a sentence.', it should print the sentence", () =>{
    const output = cow.Speak("This is a sentence.");

    expect(output)
        .toBe(
`/ This is a sentence. \\
\\                     /
 ---------------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`);

});


it("Given 'This is a very long sentence, it is more then the maximum of 40 characters of the window' it should print the sentence", () => {
    const output = cow.Speak("This is a very long sentence, it is more then the maximum of 40 characters of the window");

    expect(output)
        .toBe(
`/ This is a very long sentence, it is  \\
| more then the maximum of 40          |
\\ characters of the window             /
 --------------------------------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`
        );
})

it("Given 'This is a very long sentence, it is long' it should print the sentence", () => {
    const output = cow.Speak("This is a very long sentence, it is long.");

    expect(output)
        .toBe(
`/ This is a very long sentence, it is  \\
\\ long.                                /
 --------------------------------------
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`
        );
})