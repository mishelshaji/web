var student = {
    name: "student 1",
    age: 20,
    m1: 33,
    m2: 36,
    phone: [5465985698, 3665986598],
    total: function(){
        return this.m1 + this.m2;
    },
    "full name": "abc def"
}

console.log(student.name)
console.log(student["full name"])
console.log(student.hasOwnProperty('name'))
console.log(student.phone[1])
console.log(student.total())