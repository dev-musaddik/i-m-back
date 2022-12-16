console.log("musaddik");

function submit() {
    value_in = parseInt(document.getElementById('frist').value);
    maile = value_in * 0.000189;
    document.getElementById("feet").innerHTML = value_in;
    document.getElementById('mile').innerHTML = maile;
    document.getElementById('ans').style.display = "flex";

}

function submit_one() {
    value_one = parseInt(document.getElementById('one').value);
    value_two = parseInt(document.getElementById('two').value);
    value_there = parseInt(document.getElementById('there').value);

    sum_one = value_one * 1;
    sum_two = value_two * 3;
    sum_there = value_there * 5;
    sum = sum_one + sum_two + sum_there;
    document.getElementById('ans_one').innerHTML = sum;

}
function floors_submit() {
   
    document.getElementById('ans_section').style.display = "block";
    floors_input = parseInt(document.getElementById('floors_input').value);
    document.getElementById('usr_input').innerHTML = floors_input;
    if (floors_input > 0 && floors_input <= 10) {
        floors_height= floors_input * 15;
        floors_usr_ans = floors_height*1000;
       
        document.getElementById('usr_output').innerHTML = floors_usr_ans;
    }
   else if(floors_input>10 && floors_input<=20){
    ans_one =floors_input - 10;
    floors_height_one= 10 * 15;
    floors_height_two= ans_one *12;
    sum_floors_height=floors_height_one+floors_height_two;
    floors_usr_ans = sum_floors_height*1000;
   
    document.getElementById('usr_output').innerHTML = floors_usr_ans;
   }
   else if(floors_input>20){
   
    ans_two=floors_input-20;
    floors_height_there=ans_two*10;

    ans_there = floors_height_there*1000;
    floors_usr_ans =ans_there +270000;
   
    document.getElementById('usr_output').innerHTML = floors_usr_ans;
   }
    else 
    //   document.getElementById('error').style.display="block";
        document.getElementById('ans_section').style.display="none";
        
}
function animal_submit(){
    let usr_value=  parseInt(document.getElementById('animal_usr').value);
if(usr_value >0 && usr_value<=10){

    let usr_ans =usr_value*50;
    document.getElementById('animal_ans_main').innerHTML=usr_ans;
}
}