window.onload = () => {
    let bc = document.querySelector("#horaireBC")
    let char = document.querySelector("#horaireChar")
    let gent = document.querySelector("#horaireGent")
    let actualTime = new Date()
    let days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let day = days[actualTime.getDay()]
    let hour = actualTime.getHours()
    hour = ("O"+hour).slice(-2)
    let minutes = actualTime.getMinutes()
    minutes = ("0"+minutes).slice(-2)
    if (minutes.length==1){
        m
    }
    switch(day){
        case "dimanche":
            staChar = "fermé"
            if ((hour >= 12 || (hour >= 11 && minutes > 29)) && hour < 15){
                staBC = "ouvert"
                staGent = "ouvert"
            } else {
                staBC = "fermé"
                staGent = "fermé"
            }
            break;
        case "lundi":
            staBC = "fermé";
            staGent = "fermé";
            if ((hour >= 12 || (hour >= 11 && minutes > 29)) && hour < 23){
                staChar = "ouvert"
            } else {
                staChar = "fermé"
            } break;
        case "mardi":
        case "mercredi":
        case "jeudi":
        case "vendredi":
        console.log(hour)
        console.log(minutes)
            if ((hour >= 12 || (hour >= 11 && minutes > 29)) && hour < 23){
                staBC = "ouvert"
                staChar = "ouvert"
                staGent = "ouvert"
            }else{
                staBC = "fermé"
                staChar = "fermé"
                staGent = "fermé"
            } break;
        case "samedi":
            if ((hour >= 12 || (hour >= 11 && minutes > 29)) && hour < 23){
                staBC = "ouvert"
                staChar = "ouvert"
                staGent = "ouvert"
            } else if (hour >= 23  || minutes <= 59){
                staChar= "ouvert"
            } else {
                staBC = "fermé"
                staChar = "fermé"
                staGent = "fermé"
            }
        default :
            staBC = "fermé"
            staChar = "fermé"
            staGent = "fermé"
        }
    let messageBC = "Nous sommes " + day + " " + hour + "h" + minutes + ",\n le restaurant est donc " + staBC + "."
    bc.innerText = messageBC
    let messageChar = "Nous sommes " + day + " " + hour + "h" + minutes + ",\n le restaurant est donc " + staChar +"."
    char.innerText = messageChar
    let messageGent = "Nous sommes " + day +  " " + hour + "h" + minutes + ",\n le restaurant est donc " + staGent +"."
    gent.innerText = messageGent
}