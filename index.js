let SCORE=0;
const pickHand =(hand) => {
   

        //show the next page with hand picked
        //hide the current page as well
        
        const pickinghands ={
            rock:'rock.png',
            paper:'paper.png',
            scissor:'Scissors.png'

        }
        let hands=document.querySelector(".hands");
        hands.style.display="none";
        let contest=document.querySelector(".contest");
        contest.style.display="flex";

        if(hand=='stone')
        {
            document.getElementById('userpickimage').src='Rock.png';
        }
        else if(hand=='paper')
        {
            document.getElementById('userpickimage').src='paper.png';
        }
        else {
            document.getElementById('userpickimage').src='Scissors.png';
        }

        let cphand=pickcomputerhand();
        score(hand,cphand);
        
    

}
const newgame= () => {
    let hands=document.querySelector(".hands");
    hands.style.display="flex";
    let contest=document.querySelector(".contest");
    contest.style.display="none";


}
const pickcomputerhand= () => {
    const pickinghands ={
        rock:'rock.png',
        paper:'paper.png',
        scissor:'Scissors.png'

    }
    let hands=['rock','paper','scissor'];
    let pick=Math.floor(Math.random()*3);
    comphand=hands[pick];
    let ele=document.getElementById('housepick');
    ele.src=pickinghands[comphand];
    return comphand;

}
const score=(userhand,cphand) => {
    
    if(userhand=='paper' && cphand=='scissor')
    {
        setdecision('You loose');
    }
    
    else if(userhand=='paper' && cphand=='rock')
    {
        setdecision('You Win');
        setscore(SCORE + 1);
    }

    else if(userhand=='paper' && cphand=='paper')
    {
        setdecision('Tie');
    }

    else if(userhand=='rock' && cphand=='rock')
    {
        setdecision('Tie');
    }

    else if(userhand=='rock' && cphand=='paper')
    {
        setdecision('You Loose');
    }

    else if(userhand=='rock' && cphand=='scissor')
    {
        setdecision('You Win');
        setscore(SCORE+1);
    }

    else if(userhand=='scissor' && cphand=='paper')
    {
        setdecision('You win');
        setscore(SCORE+1);
    }

    else if(userhand=='scissor' && cphand=='rock')
    {
        setdecision('You Loose');
    }

    else if(userhand=='scissor' && cphand=='scissor')
    {
        setdecision('Tie')
    }
}
const setdecision = (decision) => {
    document.querySelector('.decision h1').innerText=decision;
} 
const setscore= (score) => {
    document.querySelector('.score h1').innerText=score;
    SCORE=score;
}