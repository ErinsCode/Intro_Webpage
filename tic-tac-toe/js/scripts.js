var markers = ["<img src='img/link.png' alt='X'>", "<img src='img/octorok.png' alt='O'>"]; //markers for board
var players = []; 
var whoseTurn = 0;
var totals = [0, 0];
var gameResult = -1;  //if game is won = 1, or tie = 0
var endGameMessage = ["Won!", "It's a tie"];
var endGameSound = ['img/tieSound.mp3', 'img/wonSound.mp3'];

//start the initial game with input from players
function startGame()
{
    //get player information
    players[0] = document.getElementById('player1').value;
    players[1] = document.getElementById('player2').value;

    //hide player information form, show gameboard
    document.getElementById("gameboard").className = "show";
    document.getElementById("player-form").className = "hide";

    //show turn
    document.getElementById("message-to-players").innerText = players[whoseTurn] + "'s Turn";
}

function playGame(clickedDiv, divValue)
{
    if (!gameIsOver())
    {
        //add marker to playing field
        clickedDiv.innerHTML = markers[whoseTurn];

        //increment players' total count for possible win
        totals[whoseTurn] += divValue;

        //prevent clicking on same div again
        clickedDiv.attributes["0"].value = "";

        //if game is over announce if win or tie, show the play again button
        if (gameIsOver())
        {
            announceGameResult();
            document.getElementById("play-again-div").className = "show";

        }
        else
        {
            //update whose turn
            if (whoseTurn == 0)
            {
                whoseTurn = 1;
            }
            else
            {
                whoseTurn = 0;
            }

            //updatewhoseturn message
            document.getElementById("message-to-players").innerText = players[whoseTurn] + "'s Turn";

        }
    }


}


//return true if game is over
function gameIsOver()
{
    if (isWin())
    {
        return true;
    }
    else if (isTie())
    {
        return true;

    }
    else
    {
        return false;
    }


}

//check if the game is a tie.  Just need to look at if all the board has a marker as isWin function will be called first
function isTie()
{
    var board = document.getElementById("gameboard").children;

    for (x = 0; x < board.length; x++)
    {
        if (board[x].innerHTML == "")
        {
            gameResult = 0;
            return false;
        }
    }

    return true;
}

//check if game won by checking each player's totals for the divs they have marked.
function isWin()
{
    var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];

    for (i = 0; i < winCodes.length; i++)
    {
        if ((totals[whoseTurn] & winCodes[i]) == winCodes[i])
        {
            gameResult = 1;
            return true;
        }

    }

    return false;
}

//announce if game won or a tie.  Play the correct sound for each
function announceGameResult()
{
    if (gameResult == 0)
    {
        document.getElementById("message-to-players").innerText = "It's a tie!";


    }
    else
    {
        document.getElementById("message-to-players").innerText = players[whoseTurn] + " Won!";


    }

    var audio = document.getElementById("myAudio");
    audio.innerHTML = "<source src='" + endGameSound[gameResult] + "' type='audio/mpeg'>";
    audio.load();
    audio.play();

}

//reset variables so that game can start over.  Reset the divs to what they were in the beginning
//hide the play again div again and display whose turne
function restartGame()
{
    whoseTurn = 0;
    totals = [0, 0];
    gameResult = -1;
    bitValue = 1;

    var board = document.getElementById("gameboard").children;

    for (x = 0; x < board.length; x++)
    {
        board[x].innerHTML = "";
        board[x].attributes["0"].value = "playGame(this," + bitValue + ")";
        bitValue *= 2;
    }

    document.getElementById("play-again-div").className = "hide";
    document.getElementById("message-to-players").innerText = players[whoseTurn] + "'s Turn";



}


