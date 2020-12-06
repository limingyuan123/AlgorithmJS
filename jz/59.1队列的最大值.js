var subQueue = []; //定义一个辅助队
var queue = [];

function Max() {
    return subQueue[subQueue.length - 1];
}

function popQueue() {
    if (queue.length != 0) {
        let num = queue.shift();
        if (subQueue.length > 0 && num === subQueue[0]) {
            subQueue.shift();
        }
        return num;
    }
}

function pushQueue(x) {
    if (subQueue.length === 0||x > subQueue[subQueue.length - 1]) {
        subQueue.push(x);
    }
    queue.push(x);
}
pushQueue(5);
pushQueue(3);
pushQueue(6);
pushQueue(7);
popQueue();
popQueue();
pushQueue(8);
let res = Max();
console.log(res);