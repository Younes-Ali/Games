let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let state = document.getElementById('state');

let board = [[b1,b2,b3],[b4,b5,b6],[b7,b8,b9]];
let currentPlayer = 'X';



function choise(id){
    state.style.color = 'white';
    if((id.innerHTML != '')){
        state.innerHTML = 'Invalid move, try again !';
        state.style.color = 'red';
        return;
    }
    id.innerText = currentPlayer;
    if(checkWin()){
        state.innerHTML = 'player '+currentPlayer+ ' wins !';
        state.style.color = '#facc15';
        setInterval(function(){state.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
    }
    else if(checkDraw()){
        state.innerHTML = "It's a draw! NO player win";
        setInterval(function(){state.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
    }
    else{
        switchPlayer();
        state.innerHTML = 'player '+currentPlayer+' your turn';
    }
}

function checkWin(){
    for(let i=0; i<3; i++){
        if(board[i][0].innerHTML===board[i][1].innerHTML && board[i][1].innerHTML===board[i][2].innerHTML && board[i][2].innerHTML != ''){
            board[i][0].style.background = '#22d3ee';
            board[i][1].style.background = '#22d3ee';
            board[i][2].style.background = '#22d3ee';
            return true;
        } 
        if (board[0][i].innerHTML===board[1][i].innerHTML && board[1][i].innerHTML===board[2][i].innerHTML && board[2][i].innerHTML != ''){
            board[0][i].style.background = '#22d3ee';
            board[1][i].style.background = '#22d3ee';
            board[2][i].style.background = '#22d3ee';
            return true;
        } 
    }
    if (board[0][0].innerHTML===board[1][1].innerHTML && board[1][1].innerHTML===board[2][2].innerHTML && board[2][2].innerHTML != ''){
        board[0][0].style.background = '#22d3ee';
        board[1][1].style.background = '#22d3ee';
        board[2][2].style.background = '#22d3ee';
        return true;
    } 
    if (board[0][2].innerHTML===board[1][1].innerHTML && board[1][1].innerHTML===board[2][0].innerHTML && board[2][0].innerHTML != ''){
        board[0][2].style.background = '#22d3ee';
        board[1][1].style.background = '#22d3ee';
        board[2][0].style.background = '#22d3ee';
        return true;
    }
    return false;
}

function checkDraw(){
    for (let i = 0; i < 3; i++) {
        for ( let j = 0; j < 3; j++) {
            if (board[i][j].innerHTML != 'X' && board[i][j].innerHTML != 'O') {
                return false;
            }
        }
    }
    return true;
}

function switchPlayer(){
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
}



