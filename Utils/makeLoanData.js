import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const newPerson = () => {
    const statusChance = Math.random()
    return {
        request: randomDate(new Date(2012, 0, 1), new Date(2021, 12, 31)),
        due: randomDate(new Date(), new Date()),
        id: 'led_' + makeid(25),
        amount: Math.floor(Math.random() * 1000),
        progress: Math.floor(Math.random() * 100),
        user: namor.generate({ words: 1, numbers: 0 }) + namor.generate({ words: 1, numbers: 0 }) + '@gmail.com',
        status:
            statusChance > 0.99
                ? 'Completed'
                : statusChance > 0.66
                    ? 'KYC Level 2'
                    : statusChance > 0.33
                        ? 'KYC Level 1'
                        : 'Pending KYC',
    }
}

export default function makeLoanData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
