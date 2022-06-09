// Code your solutions in this file
/*
let spy;
beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

afterEach( () => {
    spy.restore();
  } );
*/
const friends = ['David','Paul','Ashley','Rachel'];

  function writeCards(invites, quote) {
      let newArray = [];
      for (let i = 0; i < invites.length; i++) {
          newArray.push(`Thank you, ${invites[i]}, for the wonderful ${quote} gift!`);         
      };
    return newArray;
  };
  console.log(writeCards(['p','o'],'suprise'));



  function countDown(time) {
      for(let seconds = time; seconds >=0; seconds--) {
          console.log(seconds);
      };
  };

  countDown(10);