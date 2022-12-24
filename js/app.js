const generator = new Generator();

function getTags() {
    const tags = generator.getTags()
    let html = ''
    tags.forEach((t) => {
        html += t.name + '<br>'
    })

    return html
}

function getQuote() {
    const quotes = generator.getQuote(TAGS.RANDOM)
    return quotes.join('<br>');
}

document.querySelector('.list > div').innerHTML = getTags();
document.querySelector('.content > div').innerHTML = getQuote()