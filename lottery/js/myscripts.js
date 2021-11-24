var numOfNums;

function getFirstLottoNumbers()
{
    numOfNums = document.getElementById("number-input").value;
    generateNumbers(numOfNums);
    document.getElementById("more-nums").className = "show buttons";
    document.getElementById("number-input").className = "hide";
    document.getElementById("org-submit").className = "hide";

}

function getMoreNumbers()
{
    generateNumbers(numOfNums);

}


function generateNumbers(num)
{
    var lottoNumbers = [];
    var lottoString = "";

    for (var n = 0; n < num; n++)
    {
        lottoNumbers[n] = Math.ceil(Math.random() * 99);
    }

    for (var element = 0; element < lottoNumbers.length; element++)
    {
        lottoString += lottoNumbers[element];

        if (element < lottoNumbers.length - 1)
        {
            lottoString += "-";
        }
    }

    document.getElementById("lotto-results").innerText = lottoString;
    
}


