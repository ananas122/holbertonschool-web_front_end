function createClassroom(numberOfStudents) {
    // function de closure 
    function studentSeat(seat) {
        // Création d'une closure
        return function() {
            // closure qui connait de la valeur de seat
            return seat;
        }
    }

    let students = [];
    // loop closures
    for (let i = 0; i < numberOfStudents; i++) {
        //
        students.push(studentSeat(i + 1));
    }

    return students;
}

const classRoom = createClassroom(10);
