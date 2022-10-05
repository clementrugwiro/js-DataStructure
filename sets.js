class myset {
    constructor() {

        let collection = [];

        this.has = function (value) {
            return (collection.indexOf(value) !== -1);
        };
        this.add = function (value) {
            if (!this.has(value)) {
                collection.push(value);
                return true;
            }
            return false;
        };
        this.remove = function (value) {
            if (this.has(value)) {
               let index = collection.indexOf(value);
                collection.splice(index, 1);
                return true;
            }
            return false;
        };

        this.values = function () {
            return collection;
        };

        this.union = function (otherset) {
            let unionset = new myset();
            let firstset = this.values();
            let secondset = otherset.values();

            firstset.forEach(function (e) {
                unionset.add(e);
            });
            secondset.forEach(function (e) {
                unionset.add(e);
            });

            return unionset;
        };

    }
}

let numset = new myset()

numset.add(4)
numset.add(5)
numset.add(0)
numset.add(6)
numset.values()
numset.remove(5)
console.log(numset.values())

let numset1 = new myset()

numset1.add(3)
numset1.add(9)
numset1.add(0)
numset1.values()
numset1.remove(9)
console.log(numset1.values())

console.log(numset.union(numset1).values())


