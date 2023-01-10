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

