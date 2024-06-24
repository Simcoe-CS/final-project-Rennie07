/** @type {HTMLCanvasElement} */
//0(air), 1(block), 2(ladder), 3(finishLevel), 4(barrelControl(air)), 5(barrelControl(block)), 6(random barrelControl(air)), 7(randomBarrel drop(air))
map1 = [ //Donkey Kong level 1 (28, 29)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0],
    [0, 4, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4],
    [0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4],
    [0, 4, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 4, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 4, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4],
    [4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
    [4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
    [4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
map2 = [ //Donkey Kong level 2 (28, 29)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 3, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 4, 0, 4, 0, 2, 7, 0, 6, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 7, 2, 0, 0, 4, 0, 4, 7, 0, 0, 6, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 5, 0, 5, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 4, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 1, 0, 0, 1, 1, 1, 1, 5, 5, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 2, 0, 6, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 5, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 5, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
map3 = [ //Donkey Kong level 1 (28, 29)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
map4 = [ //Donkey Kong level 1 (28, 29)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let canvas = document.getElementById("can");
let c = canvas.getContext("2d");

window.addEventListener('load', create);
window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);
window.setInterval(createBarrels, 2000);

let marioX = 0;
let marioY = 390;
let marioWidth = 12;
let marioHeight = 30;

let blocks = [];
let barrels = [];
let mario;
let started = false;
let blockSize = 15;
let jumpKeyActive = false;

let aboveBlock = null;
let belowBlock = null;
let leftBlock = null;
let rightBlock = null;

let leftKeyOn = false;
let rightKeyOn = false;
let upKeyOn = false;
let downKeyOn = false;

let ceilingCollide = false;

let gravityIndex = 0;
let jumpIndex = 1;
let marioVelX = 0;
let mapLevel = 1;
let currentMap = [];

const FPS = 165; // Target frames per second
const FRAME_TIME = 1000 / FPS; // Time per frame in milliseconds

const spriteSize = 32;
var currentFrameBarrel = 0;
var barrelSrcX;
var barrelSrcY;
var barrel = new Image();
var block = new Image();
var ladder = new Image();
barrel.src = "barrel.png";
block.src = "block.png";
ladder.src = "ladder.png";

setInterval(function(){
    //Math for image/ frame/ sprite
    currentFrameBarrel ++;
    if(currentFrameBarrel == 1) {
        barrelSrcX = 0;
        barrelSrcY = 0;
    } else if (currentFrameBarrel == 2) {
        barrelSrcX = 32;
        barrelSrcY = 0;
    } else if (currentFrameBarrel == 3) {
        barrelSrcX = 0;
        barrelSrcY = 32;
    } else {
        currentFrameBarrel = 0;
        barrelSrcX = 32;
        barrelSrcY = 32;
    }
}, 300);

class Block {
    x; y; color; blockSize; type;//declaring variables
    constructor(x, y, color, blockSize, type) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.blockSize = blockSize;
        this.type = type;
    }

    draw() {
        if(this.type == "air"){
            c.fillStyle = "black";
            c.fillRect(this.x, this.y, this.blockSize, this.blockSize);
        } else if (this.type == "regular"){
            c.drawImage(block, 0, 0, spriteSize, spriteSize, this.x, this.y, this.blockSize, this.blockSize);
        } else if(this.type == "ladder") {
            c.drawImage(ladder, 0, 0, spriteSize, spriteSize, this.x, this.y, this.blockSize, this.blockSize);
        }
    }
}

class Mario {
    x; y; color; width; height; //declaring variables
    constructor(x, y, color, width, height) {
        marioX = x;
        marioY = y;
        this.color = color;
        marioWidth = width;
        marioHeight = height;
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(marioX, marioY, marioWidth, marioHeight);
    }
}
class Barrel {
    x; y; color; barrelSize; barrelDirectionR;//declaring variables
    constructor(x, y, color, barrelSize) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.barrelSize = barrelSize;
        this.barrelDirectionR = (Math.random() < 0.5);
    }

    draw() {
        // c.fillStyle = "#964B00";
        // c.fillRect(this.x, this.y, this.barrelSize, this.barrelSize);

        c.drawImage(barrel, barrelSrcX, barrelSrcY, spriteSize, spriteSize, this.x, this.y, this.barrelSize, this.barrelSize);
    }
    update() {
        if(isBarrelCollidingWithMario(this.x, this.y)) { // Game Over because barrel hit mario
            console.log("Game Over")
            restartGame();
        } else if(isBarrelCollidingWithPath(this.x, this.y, 4)) { //Colliding with barrel dropper (air)
            this.y += 0.5;
            this.barrelDirectionR = !this.barrelDirectionR;
        } else if(isBarrelCollidingWithPath(this.x, this.y, 5)) { //Colliding with barrel dropper (block)
            this.y += 0.5;
            this.barrelDirectionR = !this.barrelDirectionR;
        }  else if(isBarrelCollidingWithPath(this.x, this.y, 6)) { //Colliding with barrel direction randomizer
            this.barrelDirectionR = Math.random() < 0.5;
            if(this.barrelDirectionR) { //goes right
                this.x += 0.8;
            } else { //goes left
                this.x -= 0.8;
            }
        } else if(isBarrelCollidingWithPath(this.x, this.y, 7)) { //Random dropper Colliding  (block) 
            if(Math.random() < 0.5) {this.y += 0.8;}
            else {this.x += 0.8}
            this.barrelDirectionR = !this.barrelDirectionR;
        } else {
            if(this.barrelDirectionR) { //goes right
                this.x += 0.8;
            } else { //goes left
                this.x -= 0.8;
            }
        }
    }
}

function createBarrels() { // 16, 2
    mapDecider();
    x = 16 * blockSize;
    y = 2 * blockSize;
    barrels.push(new Barrel(x, y, blockSize, blockSize));
}

function createMario() {
    mario = new Mario(marioX, marioY, "#e4000f", marioWidth, marioHeight);
}

function createBlocks() {
    mapDecider();
    blocks = [];
    barrels = [];
    for (i = 0; i < 29; i++) {
        for (j = 0; j < 28; j++) {
            if (currentMap[i][j] == 0) {//Empty space  
            } else if (currentMap[i][j] == 1) { // Regular Block
                x = j * blockSize;
                y = i * blockSize;
                color = "#00008B";
                type = "regular";
                blocks.push(new Block(x, y, color, blockSize, type));
            } else if (currentMap[i][j] == 2) { //Ladder Block
                x = j * blockSize;
                y = i * blockSize;
                color = "#f8be10";
                type = "ladder";
                blocks.push(new Block(x, y, color, blockSize, type));
            }  else if (currentMap[i][j] == 3) { //Finish Level Block
                x = j * blockSize;
                y = i * blockSize;
                color = "#c8a4d4";
                type = "finish";
                blocks.push(new Block(x, y, color, blockSize, type));
            }  else if (currentMap[i][j] == 4) { // Barrel Block (air)
                x = j * blockSize;
                y = i * blockSize;
                color = "black";
                type = "air";
                blocks.push(new Block(x, y, color, blockSize, type));
            }  else if (currentMap[i][j] == 5) { // Barrel Block (block)
                x = j * blockSize;
                y = i * blockSize;
                color = "#00008B";
                type = "regular";
                blocks.push(new Block(x, y, color, blockSize, type));
            }  else if (currentMap[i][j] == 6) { // Random Barrel Block (air)
                x = j * blockSize;
                y = i * blockSize;
                color = "black";
                type = "air";
                blocks.push(new Block(x, y, color, blockSize, type));
            }  else if (currentMap[i][j] == 7) { // Random Barrel Block (air)
                x = j * blockSize;
                y = i * blockSize;
                color = "black";
                type = "air";
                blocks.push(new Block(x, y, color, blockSize, type));
            }
        }
    }
}

function create(event) {
    createMario();
    currentMap = map1;
    createBlocks();
    createBarrels();

    //Needed to run create event
    if (!started) {
        window.requestAnimationFrame(animate);
        started = true;
    }
}

function keyPressed(event) {
    if(event.key == "d" || event.key == "D"){//right
        rightKeyOn = true;
    } else if(event.key == "a" || event.key == "A") {//Left
        leftKeyOn = true;
    } else if(event.key == "w" || event.key == "W") {//up
        upKeyOn = true;
    } else if(event.key == "s" || event.key == "S") {//down
        downKeyOn = true;
    } else if(event.key == " "){//Jump
        if(!isPositionCollidingWithBlock(marioX, marioY, 1, "yU")) { //checking to see if mario is touching the floor
            jumpKeyActive = true;
        } else jumpKeyActive = false;
    }
}

function keyReleased(event) {
    if(event.key == "d" || event.key == "D"){//right
        rightKeyOn = false;
    } else if(event.key == "a" || event.key == "A") {//Left
        leftKeyOn = false;
    } else if(event.key == "w" || event.key == "W"){//up
        upKeyOn = false;
    } else if(event.key == "s" || event.key == "S") {//down
        downKeyOn = false;
    }
}
let lastFrameTime = performance.now(); // Get current time in milliseconds
function animate() {
    let currentTime = performance.now();
    let dT = (currentTime - lastFrameTime) / 1000; // Convert to seconds
    //Takes Care of calling all movement
    moveMarioLeft();
    moveMarioRight();
    marioMovement();

    for (let i = 0; i < barrels.length; i++) {
        barrels[i].update();
    }


    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].draw();
    }
    for (let i = 0; i < barrels.length; i++) {
        barrels[i].draw();
    }
    mario.draw();
    lastFrameTime = currentTime;
    window.requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

function mapDecider() {
    if(mapLevel == 1) {
        currentMap = map1;
    } else if(mapLevel == 2) {
        currentMap = map2;
    } else if(mapLevel == 3) {
        currentMap = map3;
    } else if(mapLevel == 4) {
        currentMap = map4;
    }
}

function marioMovement() {
    if(isPositionCollidingWithBlock(marioX, marioY, 3, "any")) { // Level Finished
        mapLevel ++;
        marioX = 0;
        marioY = 390;
        createBlocks();
        console.log(mapLevel);
    }
    //Every Time Jump gets pressed 
    if(jumpKeyActive && !isPositionCollidingWithBlock(marioX, marioY, 1, "yU")){
        //Creates a Gradual Jump
        if(jumpIndex % 2 == 0) {// Adds a delay to the jump
            //Creates a more realistic jump
            if(jumpIndex < 5) {
                marioY -= 5;
            } else if (jumpIndex < 8) {
                marioY -= 4;
            } else {
                marioY -= 3;
            } 
        } 
        if(jumpIndex > 16) { // Jump hits its peak //16 best
            jumpIndex = 0;
            jumpKeyActive = false;
        }
        jumpIndex ++;

    } else if(upKeyOn) {
        if(isPositionCollidingWithBlock(marioX, marioY, 2, "any")){ //posX, posY, blocktype = ladder(2)
            marioY -= 1;
        } else upKeyOn = false;
    } else if(downKeyOn) {
        if(isPositionCollidingWithBlock(marioX, marioY, 2, "any")){
            marioY += 1;
        } else downKeyOn = false;
    } else { //Cannot Jump because Mario In air and velocity is no longer going up
        jumpKeyActive = false;

        //Creates Gravity
        //If mario is not touching the floor then he must be in air and needs to fall down
        if(!isPositionCollidingWithBlock(marioX, marioY, 1, "yD")){ //the longer in the air, the faster the fall, with a terminal velocity
            if(gravityIndex % 3 == 0) {
                if(gravityIndex < 10) {
                    marioY += 0.8
                } else if (gravityIndex < 13) {
                    marioY += 1.6;
                } else if (gravityIndex < 18) {
                    marioY += 2.6;
                } else {
                    marioY += 3.8;
                }
            }
            gravityIndex ++;
        } else gravityIndex = 0;
    }
}

//Checks blocks and map to see if mario can move right
//then moves mario right
function moveMarioRight() {
    if(rightKeyOn){
        if(marioX + marioWidth >= canvas.width - 1 || isPositionCollidingWithBlock(marioX + 1.2, marioY, 1, "xR")){
        } else {
                marioX += 0.8;
        }
    }
}
//Checks blocks and map to see if mario can move left
//then moves mario left
function moveMarioLeft() {
    if(leftKeyOn){
        if(marioX <= 1.5 || isPositionCollidingWithBlock(marioX - 1.2, marioY, 1, "xL")){ 
        } else {
                marioX -= 0.8;
        }
    }
}

function isPositionCollidingWithBlock(x,y, blockType, type) {
        //converts position to grid position
        var row = Math.floor((y / blockSize));// row
        var col = Math.floor(x / blockSize);// column
    
        if(type == "any"){
        // checks if mario is in map
            // Check if mario's head is in contact with block
            if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                return true;
            } else if (currentMap[row + 1][col] === blockType || currentMap[row + 1][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                return true;
            } else if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                return true;
            } else if (currentMap[row + 2][col] === blockType || currentMap[row + 2][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                return true;
            }
        }
        //Left and Right
        else if (type == "xL") {
            if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                marioX = ((col + 1) * blockSize);
                return true;
            } else if (currentMap[row + 1][col] === blockType || currentMap[row + 1][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                marioX = ((col + 1) * blockSize);
                return true;
            }
        }  else if (type == "xR") {
            if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                marioX = (col * blockSize) + 3;
                return true;
            } else if (currentMap[row + 1][col] === blockType || currentMap[row + 1][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                marioX = (col * blockSize) + 3;
                return true;
            }
        } 
        
        //Up and Down
        else if (type == "yU") {
            if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                return true;
            } 
        } else if (type == "yD") {
            if (currentMap[row + 2][col] === blockType || currentMap[row + 2][Math.floor((x + marioWidth) / blockSize)] === blockType) {
                marioY = (row) * blockSize;
                return true;
            }
        }

        if(blockType == 5)isPositionCollidingWithBlock(x,y, 1, type);

        return false;
}

function isBarrelCollidingWithPath(x,y, blockType) { 
    var row = Math.floor(y / blockSize);// row
    var col = Math.floor(x / blockSize);// column

    if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
        return true;
    } else if (currentMap[row][col] === blockType || currentMap[row][Math.floor((x + marioWidth) / blockSize)] === blockType) {
        return true;
    } else if (currentMap[row][col] === blockType || currentMap[Math.floor(row)][Math.floor((x + marioWidth) / blockSize)] === blockType) {
        return true;
    } else if (currentMap[row][col] === blockType || currentMap[row][Math.floor((x + marioWidth) / blockSize)] === blockType) {
        return true;
    }
}

function isBarrelCollidingWithMario(x,y) {
    if(marioX < x + blockSize && marioX + marioWidth > x && marioY < y + blockSize && marioY + marioHeight > y) {
        return true;
    }
    return false;
}
function restartGame() {
    mapLevel = 1;
    barrels = [];
    marioX = 0; marioY = 390;
}
