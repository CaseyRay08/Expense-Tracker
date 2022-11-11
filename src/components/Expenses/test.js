const dummyExpenses = [
    {
        id: 'l1',
        description: 'Car Insurance',
        cost: 250.00,
        date: new Date(2022, 10, 1)
    },
    {
        id: 'l2',
        description: 'Phone Bill',
        cost: 300.00,
        date: new Date(2022, 10, 12)
    },
    {
        id: 'l3',
        description: 'Power Bill',
        cost: 212.00,
        date: new Date(2022, 10, 24)
    },
    {
        id: 'l4',
        description: 'Water Bill',
        cost: 118.00,
        date: new Date(2022, 10, 19)
    }
];

let newDum = dummyExpenses.filter(d => {
    return d.date.getFullYear() === 2022;
})
console.log(newDum)