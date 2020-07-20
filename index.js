function submitted() {
    let gender = document.getElementById('gender').value;
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;

    day_of_birth = getDayOfBirth(year, month, day);
    if (day_of_birth == null) {
        return
    };



    let name = assignName(day_of_birth, gender)

    alert('Your name is ' + name)
}

function getDayOfBirth(year, month, day) {
    //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    if (month < 1 || month > 12) {
        alert('Month is invalid!')
        return
    }
    if (day < 1 || day > 31) {
        alert('Day is invalid!')
        return
    }


    let cc = year.substr(0, 2)
    let yy = year.substr(2, 2)
    let mm = month
    let dd = day

    let century_year = ((cc / 4) - 2 * cc - 1) + ((5 * yy / 4))
    let birth_month = 26 * (mm + 1) / 10
    let birth_day = dd

    let d = (century_year + birth_month + birth_day) % 7

    return Math.round(d)
}

function assignName(day_of_birth, gender) {
    if (gender == 'Male') {
        if (day_of_birth == 0) {
            return 'Kwasi'
        } else if (day_of_birth == 1) {
            return 'Kwadwo';
        } else if (day_of_birth == 2) {
            return 'Kwabena';
        } else if (day_of_birth == 3) {
            return 'Kwaku';
        } else if (day_of_birth == 4) {
            return 'Yaw';
        } else if (day_of_birth == 5) {
            return 'Koffi';
        } else if (day_of_birth == 6)
            return 'Kwame';

    }
    else if (gender == 'Female') {
        if (day_of_birth == 0) {
            return 'Akosua';
        } else if (day_of_birth == 1) {
            return 'Adwoa';
        } else if (day_of_birth == 2) {
            return 'Abenaa';
        } else if (day_of_birth == 3) {
            return ' Akua';
        } else if (day_of_birth == 4) {
            return 'Yaa';
        } else if (day_of_birth == 5) {
            return 'Afua';
        } else if (day_of_birth == 6) {
            return 'Ama';
        }
    }


}
