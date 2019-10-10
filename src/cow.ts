export class Cow {
    public Speak(say: string = "world"): string {
        if (say.indexOf(" ") === -1) {
            say = `Hello ${say}!`;
        }

        const balloon = this.GetBalloon(say);

        return `${balloon}
   \\   ^__^
    \\  (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`;
    }

    private GetBalloon(say: string): string {
        let value = "";
        let left = say;
        let first = true;
        let last = false;

        while (left.length !== 0) {
            let lastSpaceIndex = left.lastIndexOf(" ", 36);
            if (left.length <= 36) {
                lastSpaceIndex = left.length;
                last = true;
            }

            if (first && last) {
                value += `/ ${say} \\\n`;
                value += `\\ ${" ".repeat(say.length)} /\n`
                value += ` ${"-".repeat(say.length + 2)}`;
                return value;
            }

            const output = left.substring(0, lastSpaceIndex) + " ".repeat(36 - (lastSpaceIndex));
            left = left.substring(lastSpaceIndex + 1);


            if (first) {
                value += `/ ${output} \\\n`;
                first = false;
            } else if (last) {
                value += `\\ ${output} /\n`
                value += ` ${"-".repeat(38)}`;
            } else {
                value += `| ${output} |\n`
            }
        }
        
        return value;
    }
}
