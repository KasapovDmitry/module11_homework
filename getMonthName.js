export function getMonthName(monthNumber) {
    let month;
    if (monthNumber > 0 && monthNumber < 13) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        month = date.toLocaleString('ru', {
            month: 'long',
        });
    } else {
        month = "Введите номер от 1 до 12";
    }
    return month;
}


