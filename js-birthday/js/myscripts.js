
window.onload = function ()
{
    //prompt user for name and age
    let aName = prompt("Hi there, what's your name?");
    let age = prompt("How old are you?");

    /* Depending on their age give them a specific message */
    if (age < 50)
    {
        alert(age + "'s still pretty young " + aName + ". Give it a few more years.");
    }
    else if (age >= 50)
    {
        alert(aName + ", you're as old as dirt! (" + age + " year old dirt)");
    }
    else
    {
        alert("That's not an age.");
    }

    /*Updae the page so that they receive a happy birthday message with their name, and have the correct candles on the cake */
    document.getElementById("birthdayMessage").innerText = "Happy Birthday " + aName + "!";
    document.getElementById("candle-area").innerHTML = addCandles(parseNumbers(age));

}

/*Takes a string and parses each character into an array */
function parseNumbers(anAge)
{
    let numbers = new Array();

    for (x = 0; x < anAge.length; x++)
    {
        numbers.push(anAge.slice(x, x + 1));
    }

    return numbers;
}

/*Takes an array and returns a div of candle images that match the shape of the numbers in the array.
The array must contain numbers in order for the candle images to be added. */
function addCandles(nums)
{
    let x;
    let candles = "<div class = 'candles'> ";
    let images = "";

    while (nums.length > 0)
    {
        x = nums.pop();
        
        //only add candles if this is a number, not another character
        if (parseInt(x) || x == 0)
        {
            images = "<img src='img/candle" + x + ".png' alt='Number " + x + " candle'>" + images;

        }
    }

    candles += images + "</div>";

    return candles;

}


