
function getQuote()
{
    let quotes = [
        "&quot;There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.&quot;<br>― Nelson Mandela",
        "&quot;I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.&quot;<br>— Albert Einstein",
        "&quot;And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.&quot;<br>— Sylvia Plath",
        "&quot;My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.&quot;<br>― Maya Angelou"
    ];

    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML = quotes[random];
    playSound();

}

function playSound()
{
    var audio = document.getElementById("myAudio");
    audio.play();
}


