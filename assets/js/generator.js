const TAGS = {
    BOLE: 'Electricity for Bole',
    BALABLU: 'Balablu',
    DOWN_PAYMENT: 'Down payment for a roasted corn',
    AGBADO: 'Agabado',
    EL_RUFIA: 'Nasiru El Rufia',
    BUHARI: 'Buhari',
    AAPC: 'Action, APC',
    FOCUS: 'Focused',
    PDAPC: 'PD,APC',
    DEAD_FISH: 'Dead fish',
    MIND: 'Human mind, can change',
    RUNNING_MATES: 'Why are you running?',
    APV: 'PVC, APV, APC?',
    CHAD: 'I will recharge Lake Chad',
    ZZZ: 'Night Night',
}

const QUOTES = [
    {tags: [TAGS.BOLE], quote: "Building charge stations, we're yet to generate electricity to even roast bole"},
    {tags: [TAGS.BALABLU], quote: "A town hall, different, from blala blu, blu blu, bulaba"},
    {
        tags: [TAGS.EL_RUFIA],
        quote: "I'm openly begging Nasiru El Rufia not to run away for additional degree ehhh, excuse, [laughs] to now is  going to cairo PhD and everything, there are lots of educated relics, we are not going to let you run away, your vision, creativity, and resilience in turning a rotten situation to a bad one is necessary at this critical time, ahh. That is why we're here today"
    },
    {tags: [TAGS.AAPC], quote: "and the commitment for us, as members of the Action, APC"},
    {tags: [TAGS.FOCUS], quote: "Back on focus because I've been warned to stay on script"},
    {tags: [TAGS.PDAPC], quote: "God bless Nigeria! God bless Nigeria!! God bless PDAPC!"},
    {tags: [TAGS.BUHARI], quote: "Buhari! Buhari! Buhari!  Buhari!  Buhari! Say it again Buhari!"},
    {
        tags: [TAGS.DEAD_FISH],
        quote: "They can't get it because they don't know it, they don't know, they want to come back. Just tell them, a dead fish cannot be sweet in any soup, there are dead! We will share them"
    },
    {
        tags: [TAGS.MIND],
        quote: "There are many things we can do the same way but differently, we will, with strong determination, we need to invest in the classroom, we need to have a clinic there, I've done it when I was short of teachers in lagos, no one wants to go to the rural area, then I built eh clinics for them, and I give them extra allowance as an incentive to do it, we can do it. Human mind, can change"
    },
    {
        tags: [TAGS.AGBADO],
        quote: "We're competing with arm robbers and bandits to recruit from the youths who are unemployed, 33% unemployed, recruit 50 million youths into the army and ehhh, what they will eat? Cassava, agbado, ehhh, corn, and in the morning, yam"
    },
    {
        tags: [TAGS.RUNNING_MATES],
        quote: "They are few of us left running, one says he is Atiku. How many times has he been running?\n" +
            "He's always on the run and he's tired, tell him to go and sit down, enough is enough.\n" +
            "The other one, that one, him think na statistics we go chop.\n" +
            "He lie with arithmetic that never, no indian can solve it. \n" +
            "To mention his name is a disgrace to me self. I won't mention the name.\n" +
            "Wrong arithmetic, wrong statistics, where else economy, that's not what Nigeria needs"
    },
    {
        tags: [TAGS.APV],
        quote: "Are you great? God bless you, God bless you, go and [take] your PVC and you vote APC, do you love me? Do you love me? Do you love me? Go and take you APV, APC and you must vote, you must vote that morning"
    },
    {
        tags: [TAGS.CHAD],
        quote: "It's time we discuss the lack of food and the challenges of terrorism, we will talk about lake chad; ok, let me assure you, if I'm elected the president, I will recharge Lake Chad"
    },
    {
        tags: [TAGS.DOWN_PAYMENT, TAGS.AGBADO],
        quote: "We have no blinker of electricity. They spent more than 16 billion dollars, they forget that transmission line is a super highway for generated electricity [and] power, they could not even make a down payment for a roasted corn, for that electricity"
    },
    {tags: [TAGS.ZZZ], quote: "[Sleeps] ZZzzzzzzzZ zzzzzZZzzz ZzzzzzZZ zzzzzzzzzZ"},
];

class Generator {
    makeParagraph(tags = [], minParagraphLength = 0) {
        let match = [];
        if (tags && tags.length) {
            match = QUOTES.filter((line) => {
                let t = false;
                tags.every((tag) => {
                    if (line.tags.includes(tag)) {
                        t = true;
                        return false
                    }
                    return true
                })
                return t;
            });
        } else {
            match = QUOTES;
        }

        if (!match.length)
            return;

        let paragraph = '';
        do {
            paragraph += match[Math.floor(Math.random() * match.length)].quote + '. '
        } while (paragraph.length < minParagraphLength)

        return paragraph.trim();
    }

    getQuote(tags = [], paragraphs = 1, minParagraphLength = 0) {
        const lines = [];
        for (let i = 0; i < paragraphs; i++) {
            const p = this.makeParagraph(tags, minParagraphLength);
            if (!p.length) break;

            lines.push(p)
        }

        return lines
    }

    getTags() {
        return Object.keys(TAGS).map((key) => ({name: TAGS[key], key: key}))
    }
}

