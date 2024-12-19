function sort(arr) {

    arr.sort(((a, b) => {
        if(a.length > b.length) return 1;
        if(b.length > a.length) return -1;

        if(a > b) return 1;
        if(b > a) return -1;
    }));
    console.log(arr);
}
sort(['alpha', 'beta', 'gamma', 'ararr']);
sort(['test', 'Deny', 'omen', 'Default']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);