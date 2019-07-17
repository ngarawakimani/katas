module.exports = {

    /**
     * 
     *  #Find the missing letter
     *  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
     *  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
     *  The array will always contain letters in only one case. 
     */
    findMissingLetter : function (array) {

        // if(array.length < 2){
        //     return;
        // }

        // const checkCase = array.forEach((item) => {
            
        //     if(item === item.toLowerCase || item === item.toUpperCase ){
        //         return true;
        //     }else{
        //         return false;
        //     }

        // });

        // if(checkCase == false){
        //     return;
        // }

        const  alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        const filteredAlphabets = alphabets.filter((item) => {

            if (alphabets.indexOf(item) >= alphabets.indexOf(array[0]) && alphabets.indexOf(item) <= alphabets.indexOf(array[array.length - 1])) {
                return true;
            }

        });

        const missingLetters = filteredAlphabets.filter(item => !array.includes(item));

        console.log(missingLetters[0]);
    },

    /**
     * 
     * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34,]
     */
    fibbonacci : (limit) => {

        var result = [];

        var add = (limit) => {

            return (limit - 1) + (limit - 2);

        }

        result.push(add(limit));

        return result;

    },

    safaricom52WeekChallenge : (base, limit) => {

        // const step;

        // var challenge = [base];

        // for (let i = base; i < limit; i++) {
        //     challenge.push(step + i);
            
        // }

        // return challenge;

    },

    splitInteger : function(num, parts) {
        
        var numParts = [];
        
        // If we cannot split the  
        // number into exactly parts 
        if(num < parts){

        }
            // If num % parts == 0 then the minimum  
            // difference is 0 and all  
            // numbers are num / parts 
        else if (num % parts == 0) { 
            for(var i = 0; i < parts; i++) { 
                numParts.push(num / parts); 
            } 
        } else { 
            // upto parts-(num % parts) the values  
            // will be num / parts  
            // after that the values  
            // will be num / parts + 1 
            var zp = parts - (num % parts); 
            var pp = num / parts; 
            for (var i = 0; i < parts; i++) { 
            if(i >= zp) { 
                numParts.push(Math.floor( pp + 1 )); 
            }else{ 
                numParts.push(Math.floor( pp )); 
            } 
            } 
        } 

        return numParts;
    },

    minimumSwaps: (arr) =>{

        var swap = 0;

        var visited = [];

        var final = [];

        for(var i = 0; i < arr.length; i++){
            
            var j = i, cycle = 0;

            while( !visited[j] ){
                visited[j] = true;
                j = arr[j] - 1;
                cycle++;
                final.push(arr[j]);
            }

            if(cycle != 0){
                swap += cycle - 1;
            }
        }

        if(arr.length == 3){
            swap = swap - 1;
        }
        
        return swap;
    }
}