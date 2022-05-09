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

const newPerson = (activty) => {
    const statusChance = Math.random()
    return {
        sent: randomDate(new Date(2012, 0, 1), new Date()),
        firstName: namor.generate({ words: 0, numbers: 0 }),
        lastName: namor.generate({ words: 0, numbers: 0 }),
        invitedBy: namor.generate({ words: 0, numbers: 0 }) + namor.generate({ words: 0, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        email: namor.generate({ words: 1, numbers: 0 }) + '@gmail.com',
        status:
            statusChance > 0.99
                ? 'Completed'
                : statusChance > 0.66
                    ? 'KYC Level 2'
                    : statusChance > 0.33
                        ? 'KYC Level 1'
                        : 'Pending KYC',
        activity: activty,
        invite:
            statusChance > 0.50
                ? 'Pending'
                : 'Expired',
        role:
            statusChance > 0.9
                ? 'Super admin'
                : statusChance > 0.75
                    ? 'Admin'
                    : statusChance > 0.25
                        ? 'Member'
                        : 'Support',
        image: statusChance > 0.75
            ? '/img/team-1-800x800.jpg'
            : statusChance > 0.50
                ? '/img/team-2-800x800.jpg'
                : statusChance > 0.25
                    ? '/img/team-3-800x800.jpg'
                    : '/img/team-4-470x470.png',

    }
}

export default function makeData(activity, ...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(activity),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
