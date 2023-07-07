let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyallbuttons = [];

for(let i=0;i<all_buttons.length;i++){
    copyallbuttons.push(all_buttons[i].classList[1]);
}
 
console.log(copyallbuttons);

function buttoncolorchange(button_thing){
    if(button_thing.value == 'red'){
        paintred();
    }
    else if(button_thing.value == 'yellow'){
        paintyellow();
    }
    else if(button_thing.value == 'green'){
        paintgreen();
    }
    else if(button_thing.value == 'blue'){
        paintblue();
    }
    else if(button_thing.value == 'reset'){
        reset_color();
    }
    else if(button_thing.value == 'random'){
        random_color();
    }
}

function paintred(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function paintblue(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function paintyellow(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function paintgreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function random_color(){
    for(let i=0;i<all_buttons.length;i++){
        let color = Math.floor(Math.random()*all_buttons.length);
        console.log(color);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[color]);
    }
}

function reset_color(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[i]);
    }
    
}