
var expression = 'HTML'
var test = (()=> {

    switch(expression) {
        case 'CSS':
          return 'css'
          
        case 'HTML':
          return 'no' ;// code block

        default:
          return 'novalue'// code block
      }
    })()


//var INV_TTEST = test('HTML')
console.log(test) 

/*
var a = 10;
var res =  ((a) => {
    return a + 100;
  })

    console.log(res(10))

    */