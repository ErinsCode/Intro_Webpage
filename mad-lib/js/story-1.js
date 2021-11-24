function runStory1()
{
    //prompt them to enter the needed adjectives, nouns, and verbs
    let adj1 = prompt("First adjective");
    let adj2 = prompt("Second adjective");
    let noun1 = prompt("First noun");
    let noun2 = prompt("Second noun");
    let verb1 = prompt("First verb");
    let verb2 = prompt("Second verb");

    //build the mad lib story based on what the user entered
    let story1 = "Once upon a time there was a(n) " + adj1 + " " + noun1 + " who wanted to " + verb1 +
        " all day long. He would wake up at dawn just so he could start " + verb2 +
         "(ing) . But, he would quickly tucker himself out. Then he would curl up to his best " + adj2 + " " + noun2 + ".";

    typeWriter("story1-text", story1, 70, 0);
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
