// Code your solutions in this file
function writeCards( stringnames, event ) {
    let thankYouCards = []
    for ( let i = 0; i < stringnames.length; i++ ) {
      thankYouCards.push( `Thank you, ${stringnames[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log(startingNumber)
       startingNumber -=1
    }
    console.log(startingNumber);
  }