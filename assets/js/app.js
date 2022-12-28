const generator = new Generator();
let copyText = '';

function getTags() {
    const tags = generator.getTags()
    let html = ''
    tags.forEach((t) => {
        html += `<div class="option-single">` +
            `<input id="${t.key}" name="tags" value="${t.name}" type="checkbox" class="custom-check"> <label for="${t.key}">${t.name}</label>` +
            `<span class="checkmark"></span></div>`
    })

    document.getElementById("other_option").innerHTML = html;
}

function copyGeneratedText() {
    const btnText = document.querySelector('button.btn-copy span');
    navigator.clipboard.writeText(copyText).then(() => {
        btnText.innerText = 'Copied!';
        setTimeout(() => {
            btnText.innerText = 'Copy Text';
        }, 2000)
    });
}

function generateText() {
    const tags = [...document.querySelectorAll('.custom-check:checked')].map((el) => el.value)
    const paragraphs = document.getElementById('paragraphs').value
    const minParagraphLength = document.getElementById('p-length').value

    const quotes = generator.getQuote(tags, paragraphs, minParagraphLength);
    document.querySelector('.card-body > .gen-text').innerHTML = quotes.map(p => `<p>${p}</p>`).join('');
    copyText = quotes.join("\n\n");

    // Add copy event
    const btn = document.querySelector('button.btn-copy');
    btn.addEventListener('click', copyGeneratedText)
}

function setHeader() {
    const highlight = [
        TAGS.BALABLU
    ]
    document.querySelector('.header > .title > span').innerText = generator.getQuote(highlight).join(' ')
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

    const btn = document.querySelector('button.btn-generate');
    btn.addEventListener('click', generateText)

    setHeader();
    getTags()
    generateText();
}

init();