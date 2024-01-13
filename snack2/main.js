/* snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale
*/ 
let num=Random(1,100);
function Random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)}
    let NumGuest=parseInt(prompt("prova ad indovinare un numero da 1 a 100!"));
    while(guess!==Random){
        if(NumGuest>Random){
            console.log("il numero è troppo alto:riprova di nuovo"  )
        } else if(NumGuest<Random){
            console.log("il numero è troppo basso:riprova di nuovo"  )
            } 
        else {
            console.log("Bravo:hai trovato il numero giusto"  )

        }
    }