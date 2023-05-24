let player1input = document.querySelector('.player1input')
let player1button = document.querySelector('.player1button')
let error1 = document.querySelector('.error1')
let player2input = document.querySelector('.player2input')
let player2button = document.querySelector('.player2button')
let error2 = document.querySelector('.error2')
let player3input = document.querySelector('.player3input')
let player3button = document.querySelector('.player3button')
let error3 = document.querySelector('.error3')
let chance = document.querySelector('.chance')
let chance2 = document.querySelector('.chance2')
let player2 = document.querySelector('.player2')
let player3 = document.querySelector('.player3')
let count = 5
let count2 = 5
// player1input
player1button.addEventListener('click',function(){
    console.log(player1input.value)
    // Null value reject
    if(!player1input.value){
        error1.innerHTML = 'please enter somthing'
    }else{
        // NaN value reject
        if((NaN)){
        error1.innerHTML = 'please enter number'   
        }else{
            // telling to put value between 1 t0 10
           if(player1input.value>0 && player1input.value<11){
              document.querySelector('.player1').style.display = 'none'
              player1input.style.display = 'none'
              player1button.style.display = 'none'
              error1.style.display = 'none'
              document.querySelector('.player2').style.display = 'block'
              player2input.style.display = 'inline-block'
              player2button.style.display = 'inline-block'
              error2.style.display = 'block'
              chance.style.display = 'block'
              chance.innerHTML = `chance: ${count}`
              console.log('game start')
            //   if input not between 1 t0 10
        }else{
            error1.innerHTML = 'please enter a number between 1 to 10'
        }
    }
    }
})
// player2input 
player2button.addEventListener('click',function(){
    // null value reject
    if(!player2input.value){
        error2.innerHTML = 'please enter something'
    }else{
        // input within the limit
        if(player2input.value>0 && player2input.value<11){
    console.log(player3input.value)    
    chance.innerHTML = `chance : ${count}`
    // game won for player2
    if(player1input.value == player2input.value){
           player2.innerHTML = "player2 & 3 win"
           chance.style.display ='none'
           player2input.style.display = 'none'
              player2button.style.display = 'none'
              error2.style.display = 'none'
              player3.style.display = "none"
           chance.style.display ='block'
           
              chance.style.display = 'none'
    }
    // game won for player1
else{      
        count = count-1
        console.log(`chance:${count}`)
        // no count left 
if(count==0){
    player2.innerHTML = 'player1 win'
    chance.style.display ='none'
    player2input.style.display = 'none'
    player2button.style.display = 'none'
    error2.style.display = 'none'
    player3.style.display = "block"
    chance.style.display ='block'
    player3input.style.display = 'inline-block'
       player3button.style.display = 'inline-block'
       error3.style.display = 'block'
       chance.style.display = 'none'
       player3.style.display = 'block'
       chance2.innerHTML = `chance: ${count2}`
    //still  count left
}else{
    chance.innerHTML = `chance : ${count}`
}       
}
// if input not between 1 t0 10
    }else{
        error2.innerHTML = 'please enter a number between 1 to 10'
    }
}
}
)
// player3input 
player3button.addEventListener('click',function(){
    // null value reject
    if(!player3input.value){
        error3.innerHTML = 'please enter something'
    }else{
        // input within the limit
        if(player3input.value>0 && player3input.value<11){
    console.log(player3input.value)    
    chance2.innerHTML = `chance : ${count2}`
    // game won for player3
    if(player1input.value == player3input.value){
           player3.innerHTML = "player 2& 3 win"
           chance2.style.display ='none'
           player3input.style.display = 'none'
              player3button.style.display = 'none'
              error3.style.display = 'none'  
              player2.style.display = 'none'            
    }
    // game won for player1
else{      
    count2 = count2-1
        console.log(`chance:${count2}`)
        // no count left 
if(count2==0){
    player3.innerHTML = 'player1 win'
    chance.style.display ='none'
    player3input.style.display = 'none'
    player3button.style.display = 'none'
    error3.style.display = 'none'
    player2.style.display = 'none'
    chance2.style.display ='none'
    //still  count left
}else{    
    chance2.innerHTML = `chance : ${count2}`
}    
   
}
// if input not between 1 t0 10
    }else{
        error3.innerHTML = 'please enter a number between 1 to 10'
    }
}
}
)