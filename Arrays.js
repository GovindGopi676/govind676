// let priceINR =[20,35,13]

// let priceUSD= priceINR.map(a=> a*83)

// // console.log(priceUSD)


let cars = ['bmw', 'audi', "benz", "suzuki"]

console.log(cars[1])

cars[0]="ferrari"
console.log(cars)

for(let x of cars){

    console.log(x)
}

//convert array into string using toString and join methods

let c = cars.toString()
console.log(c)

let d = cars.join('*')
console.log(d)

//PoP() methods to use remove last element in the array

let po=cars.pop()
console.log(po)
console.log(cars)

//push() to add element in array, it return lenght of an array

let pu=cars.push('Maruthi')
console.log(pu)
console.log(cars)

//shift() to remove the first elemt of array and move to rest of the element in previous index position

let shi= cars.shift()
console.log(shi)
console.log(cars)

//unshift() to add first elemt of array and move to rest of the elemnt in next index position

let uns = cars.unshift('Mahendra')
console.log(uns)
console.log(cars)

//delete  single element from an array

// delete cars[2]
// console.log(cars)

//splice() methods

let sp= cars.splice(1,1,'rolls roys')
console.log(sp)
console.log(cars)

//slice()

let sl=cars.slice(1)
console.log(sl)
console.log(cars)

//sort()
let ps=cars.push('audi')
console.log(ps)
console.log(cars)

let sor= cars.sort()
console.log(sor)
console.log(cars)

let rev=cars.reverse()
console.log(rev)
console.log(cars)
let sor2= cars.sort()
console.log(cars)


//include() oru value array la eruka ellaiya nu check panna 

let inc = cars.includes('audi') // will give only one element to check
console.log(inc)

//find()

let a = [5,2,15,6,46,56]

let a1= a.find((x)=>{

    return x>10
})

console.log(a1)


//Map() oru new array va create pannum

let a2 = a.map(m=> m+2)
console.log(a2)

//filter()  condition ah base panni oru new array create panu

let ab = [2,0,23,56,9,64,69,69,63,67,88]

let ab1 = ab.filter((f)=> f>50)

console.log(ab1)

//reduce 

let red1 =ab.reduce((sum,curr)=> sum+curr, 0)
console.log(red1)

