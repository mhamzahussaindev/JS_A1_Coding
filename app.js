                            // Question:1
let product_Name="Laptop";
let price=999.99;
let in_Stock=true;
console.log("aQ1:",product_Name,price,in_Stock);


                             //  Question:2
console.log("Q2(A)Remainder:",27%4);
console.log("Q2(B)Squarae of 12:",12 ** 2);
let q2Count=8;
q2Count++;
console.log("Q2(C)Increment 8:",q2Count);
let q2Total=15;
q2Total-=2;
console.log("Q2(D)Decrement 15 by 2:",q2Total);


                                    //    Question:3
let firstName = "alex";
let lastName="SMITH";
let fullName=firstName+ " " +lastName;
let properCase=fullName.charAt(0).toUpperCase()+fullName.slice(1).toLowerCase();
console.log("Q3Full Name:",properCase);
console.log("Q3Length:",fullName.length);


                                 // Question:4
let temperature=25;
console.log("Q4(Temp 25):" );
if (temperature >30){
    console.log("Hot day");
} else if(temperature >=20&&temperature<=30){
    console.log("Pleasant day");
} else {
    console.log(" Cold day ");
}


                          // Question:5 
console.log("Q5(A)15==='15':",15==="15");
console.log("Q5(B)20>15 && 20<25:",20>15 && 20<25);
console.log("Q5(C)10 !=10||5>3:",10 !=10||5>3);


                        //   Question:6
let colors=["red","green","blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0,"purple");
console.log("Q6 Final Array:",colors,"Length:",colors.length);


                       //  Question:7
let fruits=["apple","banana","cherry","date","elderberry"];
// remove cherry
fruits.splice(2, 1);
// remove cherry 
let dateIndex=fruits.indexOf("date");
fruits.splice(dateIndex,1,"dragonfruit");
// So 1 was removed and 1 were replaced
let middleThree=fruits.slice(0, 3); 
// So 1 was removed and 1 were replaced
console.log("Q7Fruits:",fruits);
console.log("Q7Middle 3:",middleThree);


                        // Question:8
let q8Sum=0;
let q8Output="";
for (let i=1;i<=10;i++){
    if (i===5)continue;
    if (i>8)break;
    q8Output += i + " ";
    q8Sum +=i;
}
console.log("Q8 Numbers:",q8Output,"| Sum:",q8Sum);


                        //  Question:9
console.log("Q9 Pattern:");
for (let i=1;i<=5;i++){
    console.log("*".repeat(i));
}


                    // Question:10
let text="The quick brown fox jumps over the lazy dog";
console.log("Q10Position of fox:",text.indexOf("fox"));
console.log("Q10Extract:",text.slice(10,19));
console.log("Q10Contains dog:",text.includes("dog"));
console.log("Q10Char at 10:",text.charAt(10));


                     // Question:11
let sentence="I love JavaScript and JavaScript is awesome";
console.log("Q11 First replace:",sentence.replace("JavaScript", "coding"));
console.log("Q11 All replace:",sentence.replaceAll("JavaScript", "JS"));
console.log("Q11 Uppercase:",sentence.replace("awesome", "AWESOME"));


                     // Question:12
let num =123.456789;
console.log("Q12 Round 2 decimal places:",num.toFixed(2));
console.log("Q12 Nearest Integer:",Math.round(num));
console.log("Q12 Floor vakue:",Math.floor(num));
console.log("Q12 Ceilling value:",Math.ceil(num));
console.log("Q12 Exactly 4 decimal value:",num.toFixed(4));


                     // Question:13
console.log("Q13 Random 1-100:" , Math.floor(Math.random()*100)+1);
console.log("Q13 Random Decimal:",Math.random().toFixed(3));
console.log("Q13 Random 50-75:",Math.floor(Math.random()*(75-50+1))+50);


                     // Question:14
console.log("Q14 To Numbers:",Number("123"));
console.log("Q14 To Float:",parseFloat("45.67"));
console.log("Q14 To String:",(789).toString());
console.log("Q14 Boolean type:",typeof Boolean("true"));


                    // Question:15
let now =new Date();
console.log("Q15 Year:",now.getFullYear(),"Month:",now.getMonth(),"Day:",now.getDate());
console.log("Q15 Hours:",now.getHours());
console.log("Q15 Formatted:",now.toISOString().split('T')[0]);
let specificDate=new Date(2024,11,25);
console.log("Q15 Dec 25:",specificDate.toDateString());


                 // Question:16
function calculate(n1,n2,op) {
    if (op === "/" && n2 === 0) return "Error: Division by zero";
    switch(op) {
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "/": return n1 / n2;
    }
}
console.log("Q16 Calc:",calculate(10,2, "/"),"| Div Zero:",calculate(10, 0,"/"));


               // Question:17
let globalCounter = 0;
function incrementCounter() {
    let globalCounter=5; //  Local
    globalCounter++;
    window.globalCounter++; // Incrementing actual global
}
incrementCounter();
console.log("Q17 Note: Scope testing completed.");


              // Question:18
function getDayName(dayNum){
    switch(dayNum){
        case 0:return"Sunday";
        case 1:return"Monday";
        case 2:return"Tuesday";
        case 3:return"Wednesday";
        case 4:return"Thursday";
        case 5:return"Friday";
        case 6:return"Saturday";
        default:return"Invalid Day";
    }
}
console.log("Q18 Day:1",getDayName(1));


            // Question:19
let cd =10;
while(cd> 0){ cd--;}
console.log("Q19 Blast off!");
let f= 5, fact =1;
while(f >0) {fact *= f; f--;}
console.log("Q19 Factorial 5:",fact);


            // Question:20
let attempts =0, enteredPassword ="";
do {
    attempts++;
    if(attempts === 3) enteredPassword ="secret123"; // Simulating entry
} while (enteredPassword !== "secret123" && attempts<5);
console.log("Q20 Password Attempts:",attempts);


            // Question:21
let numbers =[12, 45, 78, 23,56, 89,34];
let max = numbers[0],sumArr =0, above50= [];
for(let n of numbers){
    if(n>max)max = n;
    sumArr += n;
    if(n >50) above50.push(n);
}
let reversed= [];
for(let i =numbers.length-1; i>=0;i--){ reversed.push(numbers[i]); }
console.log("Q21 Max:",max,"Avg:", (sumArr/numbers.length).toFixed(2));
console.log("Q21 >50:",above50,"Reversed:",reversed);


            // Question:22
function handleClick() {
    // 1. Input box se value pakarna
    var dabbi = document.getElementById("username");
    var naam = dabbi.value;

    // 2. Check karna ke khali to nahi
    if (naam == "") {
        alert("Asalam-o-Alikum Please enter name.");
    } 
    else {
        // 3. Greeting dikhana
        var p_tag = document.getElementById("greeting");
        p_tag.innerText = "Welcome, " + naam + "!";
        
        // 4. Box khali karna
        dabbi.value = "";
    }
}


                // Question:23
function validateForm(email,pass) {
    if(!email.includes("@"))return"Invalid Email";
    if(pass.length<8)return"Password too short";
    return true;
}
console.log("Q23 Validation:",validateForm("test@me.com", "pass12345"));


              // Question:24
function convertTemperature(t,unit){
    let res=unit==="C"?(t*9/5)+32:(t-32)*5/9;
    return res.toFixed(1);
}
console.log("Q24 0C to F:",convertTemperature(0, "C"));


// Question:25
let cart =[];
function addItem(n, p) { cart.push({name: n,price: p}); }
addItem("Apple", 2);addItem("Milk",3);
function calculateTotal() { return cart.reduce((s, i) => s + i.price, 0); }
console.log("Q25 Total:", calculateTotal(), "Items:",cart.map(i => i.name));