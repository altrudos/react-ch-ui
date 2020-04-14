export function getRandom (items : any[]) : any {
    var item = items[Math.floor(Math.random() * items.length)];
    return item
}

export function getRandomInt (min : number, max : number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}