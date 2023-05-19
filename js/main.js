


// CLASS-TASK

// task - 1 

    // function modifyLast(str, str1) {
    // 	return str + str.slice(-1).repeat(str1 - 1)
    // }
    // console.log(modifyLast("Hello", 9));


// task- 2 





// task -3

    // function toInt(str) {
    // 	return parseInt(str);
    // }
    // function toStr(int) {
    // 	return int.toString();
    // }
    // console.log(toInt("77"));
    // console.log(toStr(77));


// task - 4 

// function isPlural(word) {
// 	if (word.endsWith ("s")){
// 	return true;
// 	}
// 	return false;
// }
// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));


// task - 5




// task -6 

    // function checkEnding(str1, str2) {
    // 	if (str1.endsWith(str2)) {
    // 		return true
    // 	}
    // 		return false
    // 	}
    //     console.log(checkEnding("abc", "bc"));
    //     console.log(checkEnding("abc", "d"));



//________________________________________________________________________________________________________________//
//________________________________________________________________________________________________________________//

// HOME-TASK 



// VERY-EASY

// 1. Преобразование строк и чисел


    // function intToString(num) {
    //     return String(num)
    // }
    // function stringToInt(num) {
    // return parseInt(num)
    // }


// 2. Проверка равенства

// function checkEquality(a, b) {
//     if (a === b){
//           return true;
//       }
//       return false;
//   }
//   console.log(checkEquality(0, "0"));
//   console.log(checkEquality(1, 1));


// 3.Напитки разрешены?

    // function shouldServeDrinks(age, onBreak) {
    // 	if(age >= 18 && onBreak === false){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(shouldServeDrinks(17, true));
    // console.log(shouldServeDrinks(19, false));
    // console.log(shouldServeDrinks(30, true));

// 4. Подсчитайте аргументы

    // function numArgs() {
    // 	return arguments.length;
    // }
    // console.log(numArgs());
    // console.log(numArgs("foo"));
    // console.log(numArgs("foo", "bar"));
    // console.log(numArgs(true, false));
    // console.log(numArgs({}));

// 5 Переключатели включения/выключения

// function posCom(num) {
// 	return Math.pow(2, num) 
// }
// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));

// 6. Стратегия 50-30-20

    // function fiftyThirtyTwenty(ati) {
    // 	return obj = {
    // 		Needs: (ati/100*50) ,
    //     Wants: (ati/100*30) ,
    //     Savings:(ati/100*20)
    // 	}
    // }
    // console.log(fiftyThirtyTwenty(10000));
    // console.log(fiftyThirtyTwenty(50000));
    // console.log(fiftyThirtyTwenty(13450));

// 7. N-й звездный номер

    // function starNumber(n) {
    // 	return 6* n * (n-1) + 1;
    // }
    // console.log(starNumber(2))

// 8. Вернуть общее количество параметров

    // function numberArgs(/* fill-in */) {
    // 	return arguments.length;
    // }
    // console.log(numberArgs("a", "b", "c"))


    // 9. Кусок пирога
    // function equalSlices(total, people, each) 
    // {
    //     if (people * each <= total){
    //     return true;
    //     }
    //     return false;
    // }
    // console.log(equalSlices(11, 5, 2));
    // console.log(equalSlices(11, 5, 3));

// 10.Настроение по умолчанию

// function moodToday(mood) {
// 	if (arguments.length == 0) {
// 		return "Today, I am feeling neutral";
// 	} 
// 		return `Today, I am feeling ${mood}`;
// }

// 11. Существует ли число?

    // function validStrNumber(n) {
    // 	if(isNaN(n)){
    // 		return false;
    // 	}
    // 	return true;
    // }
    // console.log(validStrNumber("3.2"));
    // console.log(validStrNumber("32..4"));

// 12.Считайте слоги

    // function countSyllables(str) {
    // 	return str.length/2;
    // }
    // console.log(countSyllables("Hehehehehehe"));


// 13.Квадраты и кубы

    // function checkSquareAndCube(arr) 
    // {
    //     let sqrt = Math.sqrt(arr[0]);
    //     let cub = Math.cbrt(arr[1]);
    // 	if(sqrt == cub){
    // 	return true;
    // 	}
    // 	return false;
    // }
    // console.log(checkSquareAndCube([4, 8]));
    // console.log(checkSquareAndCube([16, 48]));


// 14. Присвоение деструктуризации

    // writeyourcodehere = [1, 2, 3, 4, 5, 6, 7, 8]
    // let [first,second,third,...other]= writeyourcodehere

	
// 15.Char-to-ASCII

    // function ctoa(c) {
    // 	return c.charCodeAt();
    // }
    // console.log(ctoa("A"));
    // console.log(ctoa("m"));



