function runStory2()
{
      //prompt them to enter the needed adjectives, nouns, and verbs
      let adj1s2 = prompt("Enter your first adjective");
      let adj2s2 = prompt("Enter your second adjective");
      let noun1s2 = prompt("Enter your first noun");
      let noun2s2 = prompt("Enter your second noun");
      let verb1s2 = prompt("Enter your first verb");
      let verb2s2 = prompt("Enter your second verb");

      let story2 = "Jerry the " + adj1s2 + " " + noun1s2 + " was going to the zoo.  He wanted to go see the " +
      noun2s2 + "(s).  When he got to their enclosure they were " + verb1s2 +
      "(ing) " + adj2s2 + " bananas. Jerry started to " + verb2s2 + " when he saw this.";

      typeWriter("story2-text", story2, 70, 0);
}

/*Adds text to an html tag by identifying the tag's id.  The text appears in the tag one letter at a time as if it is being typed*/
function typeWriter(id, text, speed, charImOn)
{
    if (charImOn < text.length)
    {
        document.getElementById(id).innerHTML += text.charAt(charImOn);
        let t = document.getElementById(id).innerHTML;
        charImOn++;

        setTimeout(function () { typeWriter(id, text, speed, charImOn) }, speed);

    }

}