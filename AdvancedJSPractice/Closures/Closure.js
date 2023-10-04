const credits = ((num) => {
    let credits = num; //only way to access this private variable is from returned function here
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0){
            console.log(`playing game, ${credits} credits remaining`);
        }
        if (credits <= 0) {
            console.log('not enough credits')
        }
    }
})(3);

credits();
credits();
credits();
credits(5);
credits();