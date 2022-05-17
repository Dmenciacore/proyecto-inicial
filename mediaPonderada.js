const notes = [
    {
        course: "English",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject){
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(function (note = 0, newNote) {
    return note + newNote;
});

const credits = notes.map(function (noteObject){
    return noteObject.credit;
});

const sumCredits = credits.reduce(function (credit = 0, newCredit){
    return credit + newCredit;
});

const totalSum = sumOfNotesWithCredit / sumCredits;