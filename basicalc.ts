#! /usr/bin/env node

import inquirer from "inquirer";

const ans = await inquirer.prompt([{ 
    message:"Enter your first number",
    type:"number",
    name:"FirstNum",

},
{
    message:"Enter your second number",
    type:"number",
    name:"SecondNum",
},
{
    message:"Select operation",
    type:"list",
    name:"operator",
   choices:["Addition","Subtraction","Multiplication","Division","Modulus","Exponential"],
}
]);

if (ans.operator==="Addition") {console.log(ans.FirstNum+ans.SecondNum);

}else if (ans.operator==="Subtraction"){console.log(ans.FirstNum - ans.SecondNum);

}else if (ans.operator==="Multiplication"){console.log(ans.FirstNum * ans.SecondNum);

}else if (ans.operator==="Division"){console.log(ans.FirstNum / ans.SecondNum);

}else if (ans.operator==="Modulus"){console.log(ans.FirstNum % ans.SecondNum );

}else if(ans.operator==="Exponential"){console.log(ans.FirstNum ** ans.SecondNum);

}else{"Please enter a valid operator"};
