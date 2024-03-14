var display = document.getElementById("display");
var outpout = document.getElementById("outpout");

function affich(input){
    display.value += input;
 
}

function SuppUn(){
    let valeurAffichee = display.value;
    display.value = valeurAffichee.slice(0, -1);
}

function SuppTous(){
    display.value = "";
    outpout.value = "";
}

function calculer(){
    outpout.value = eval(display.value);

    /*try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erreur"
    }*/

}