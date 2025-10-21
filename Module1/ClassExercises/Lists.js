//Instead of doing it separately, it can be done in an array
    //let student1 = "John"
    //let student2 = "Bill"
    //let student3 = "Smith"
    //let student4 = "Tom"

    //console.log (student1);
    //console.log (student2);
    //console.log (student3);
    //console.log (student4);

    let students = ["John", "Bill", "Smith", "Tom"]

    console.log (students[0])
    console.log (students[1])
    console.log (students[2])
    console.log (students[3])

    students.push ("James");

    console.log (students);

    students.unshift ("Jennifer");

    console.log (students);

    let cars = ["Audi", "Mercedes", "Toyota", "BMW"]

    console.log(cars);

    cars[2] = "Mitsubishi";

    console.log(cars);

    // pop and shift

    let rivers = ['Mississippi', 'Amazon', 'Nile'];
    let lastRiver = rivers.pop(); // remove the last of the array
    console.log(lastRiver); // Nile
    console.log(rivers); // [ 'Mississippi', 'Amazon' ]

    let firstRiver = rivers.shift(); // remove the first of the array
    console.log(firstRiver); // Mississippi
    console.log(rivers); // [ 'Amazon' ]

    let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];
    let fujiIndex = volcanoes.indexOf('Mount Fuji');
    console.log(fujiIndex); // 2 (indexes start at 0)
    console.log(volcanoes.indexOf("Mount Etna"));

    let numVolcanoes = volcanoes.length; //finds the number of elements of an array
    console.log(numVolcanoes); // 3