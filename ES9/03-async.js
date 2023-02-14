console.log('--------------ES9 /CONTINUACIÓN clase 23 generadores')

async function* anotherGn(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGn();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));

console.log('Finnnaly');


async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames (['vale', 'ana', 'delfi', 'fede', 'cami', 'mimi', 'agus'])

console.log('After')