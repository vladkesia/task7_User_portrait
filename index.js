const years = prompt('Введіть рік народження');
const city = prompt('Введіть місто в якому ви живите');
const sport = prompt( 'Введіть свій улюблений вид спорту')

let userYears ;
let userCity;
let userSport;

switch (true) {
    case (years === null):
        userYears = "Шкода, що Ви не захотіли ввести свою дату народження"
        break
    case (isNaN(+years)):
        userYears = 'Треба ввести число'
        break
    case (!(Number(years)>1960 && Number(years)<2015)):
        userYears = 'спробуйте інший рік'
        break
    default:
        userYears = years
}
    switch (true) {
    case (city === null):
        userCity = 'Шкода, що Ви не захотіли ввести свое місто'
        break;
        case (city.toLowerCase()==='київ'):
            userCity = "Ти живеш у столиці України"
            break;
        case (city.toLowerCase()==='вашингтон'):
            userCity = 'Ти живеш у столиці Америки'
            break;
        case (city.toLowerCase()==='лондон'):
            userCity = 'Ти живеш у столиці Англії'
            break;
        case (city.trim()===''):
                userCity ='Ви не ввели символів'
            break;
        default:
            userCity = `Ти живеш у місті ${city}`
    }

    switch (true) {
        case (null===sport) :
            userSport = 'Шкода, що Ви не захотіли ввести свій спорт'
            break;
        case (sport.toLowerCase()==='футбол'):
            userSport = "Круто! Хочеш стати як Lionel Messi ?"
            break;
        case (sport.toLowerCase()==='баскетбол'):
            userSport = 'Круто! Хочеш стати як Michael Jordan?'
            break;
        case (sport.toLowerCase()==='біг'):
            userSport = 'Круто! Хочеш стати як Usain Bolt?'
            break;
        case (sport.trim() === ''):
                userSport = 'Ви не ввели символів'
            break;
        default:
            userSport = `Твій спорт ${sport}`
    }


alert(`${userYears}\n${userCity}\n${userSport}`)


