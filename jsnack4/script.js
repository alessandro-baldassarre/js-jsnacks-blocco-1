

const listInvited = ["alessandro", "riccardo", "giovanni", "marina", "nicola", "valentina","leonardo","tim"];

const UserName = prompt("inserisci il tuo nome").toLowerCase().trim();

let isInvited = false;

for (let i =0; i < listInvited.length; i++){

    if(listInvited[i] === UserName){
        isInvited = true;
    }

}

if(isInvited){
    console.log("sei nella lista");
}
else{
    console.log("mi dispiace non sei nella lista");
}