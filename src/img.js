function getImageNumber(num) {
    return `https://raw.githubusercontent.com/deltegui/DavidElGnomoBot/master/img/${num}.jpg`;
}

function randomNumber() {
    const imgNumber = 35;
    return Math.floor(Math.random() * imgNumber);
}

module.exports = () => getImageNumber(randomNumber());