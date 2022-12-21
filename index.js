let years = +prompt('Введіть рік народження');
let city = prompt('Введіть місто в якому ви живите');
let sport = prompt( 'Введіть свій улюблений вид спорту')

let userYears = ''
let userCity = ''
let userSport = ''

if(!!years){
    userYears = `${years}`
}else if(isNaN(years)){
    userYears = 'Треба ввести число'
} else {
    userYears = `Шкода, що Ви не захотіли ввести свою дату народження`
}

    switch (city) {
        case 'Київ':
            userCity = "Ти живеш у столиці України"
            break;
        case 'Вашингтон':
            userCity = 'Ти живеш у столиці Америки'
            break;
        case 'Лондон':
            userCity = 'Ти живеш у столиці Англії'
            break;
        case null:
            userCity = 'Шкода, що Ви не захотіли ввести свое місто'
            break;
        default:
            userCity = `Ти живеш у місті ${city}`
    }

    switch (sport) {
        case 'футбол':
            userSport = "Круто! Хочеш стати як Lionel Messi ?"
            break;
        case 'баскетбол':
            userSport = 'Круто! Хочеш стати як Michael Jordan?'
            break;
        case 'біг':
            userSport = 'Круто! Хочеш стати як Usain Bolt?'
            break;
        case null :
            userSport = 'Шкода, що Ви не захотіли ввести свій спорт'
            break;
        default:
            userSport = `Твій спорт ${sport}`
    }


alert(`${userYears}\n${userCity}\n${userSport}`)


