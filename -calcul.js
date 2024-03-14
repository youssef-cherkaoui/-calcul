const display = document.getElementById("display");

function affich(input){
    display.value += input;
 
}

function SuppUn(){
    let valeurAffichee = display.value;
    display.value = valeurAffichee.slice(0, -1);
}

function SuppTous(){
    display.value = "";

}

function calculer(){
    display.value = eval(display.value);

    /*try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erreur"
    }*/

}