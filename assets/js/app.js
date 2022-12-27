const generator = new Generator();

function getTags() {
    const tags = generator.getTags()
    let html = `<div class="option-single">` +
        `<input id="random" type="checkbox" name="random" class="custom-check"> <label for="random">Random Quotes</label>` +
        `<span class="checkmark"></span></div>`
    tags.forEach((t) => {
        html += `<div class="option-single">` +
            `<input id="${t.key}" name="${t.key}" type="checkbox" class="custom-check"> <label for="${t.key}">${t.name}</label>` +
            `<span class="checkmark"></span></div>`
    })

    document.getElementById("other_option").innerHTML = html;
}

function generateText(tags = [], paragraphs = 1, minParagraphLength = 0) {
    document.querySelector('.card-body > .gen-text').innerHTML = generator.getQuote(tags, paragraphs, minParagraphLength).join('<br>')
}

function setHeader() {
    console.log(generator.getQuote([TAGS.BOLE, TAGS.BALABLU]).join(' '))
    document.querySelector('.header > .title > span').innerText = generator.getQuote([TAGS.BOLE, TAGS.BALABLU]).join(' ')
}

function init() {
    document.getElementById("other_drop").addEventListener("click", () => {
        let list = document.getElementById("other_option");
        if (list.style.display === "none") {
            list.style.display = "flex";
        } else {
            list.style.display = "none";
        }
    });

    setHeader();
    getTags()
    generateText();
}

init();