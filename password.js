function password_generator( len , isPunctuation, isNumeric ) {
    const length = (len)?(len):(10);
    const string = "abcdefghijklmnopqrstuvwxyz";
    const numeric = '0123456789';
    const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = "";
    let character = "";

    while( password.length<length ) {
        valueString = Math.floor(Math.random()*string.length);
        hold = string.charAt( valueString );
        hold = (valueString%2==0)?(hold.toUpperCase()):(hold); //to upper 
        character += hold;
        if(isNumeric){
        valueNumeric = Math.floor(numeric.length * Math.random()*Math.random());
        character += numeric.charAt( valueNumeric );
        }
        if(isPunctuation){
        valuePunctuation = Math.floor(punctuation.length * Math.random()*Math.random());
        character += punctuation.charAt( valuePunctuation );
        }
        password = character;
    }
    return password;
}

console.log( password_generator(8, false, true));
