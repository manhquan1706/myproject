function titleCase(str) {
    var string = str.toLowerCase().split(' ');
    var newArr = [];
    for (var i = 0; i < string.length; i++) {
        //     console.log(string[i].charAt(0).toUpperCase());
        newArr.push(string[i].charAt(0).toUpperCase() + string[i].substring(1));
    }
    return newArr.join(' ');
}
titleCase("I'm a little tea pot");
