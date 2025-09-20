//Daft Punk - Around the World

//function returning repeated lines

   function refactoredRefrain() {
       return "Around the world!";
   }

//function for the whole song

   function refactoredSong() {
       console.log(refactoredRefrain());
       console.log(refactoredRefrain());
       console.log(refactoredRefrain());
       console.log(refactoredRefrain());
   }

//calls the whole song function to run the program
   refactoredSong();