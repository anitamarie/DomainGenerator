var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
function random() {
    let varName = [];
    for (p = 0; p < pronoun.length; p++) {
        for (a = 0; a < adj.length; a++) {
            for (n = 0; n < noun.length; n++) {
                varName.push(pronoun[p] + adj[a] + noun[n] + ".com" )

            }
        }
    }
    document.getElementById("generator").innerHTML = varName;
}
random() 