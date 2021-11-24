
window.onload = function ()
{
    let story;

    //Have user choose what mad lib story they want to use
    do
    {
        story = prompt("What story would you like to do, 1 or 2?");
        if (story != 1 && story != 2)
        {
            alert("You need to pick 1 or 2");
        }
    } while (story != 1 && story != 2);

    if (story == 1)
    {
        runStory1();
    }
    else
    {
        runStory2();

    }

}



