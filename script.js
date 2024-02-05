function addNumbers() {
  const input = document.getElementById("numbers").value;
  const numbers = input.split(","); // Split the input into an array of numbers
  
  let sum = 0;
  for (const num of numbers) {
    // Convert each string to a number and add it to the sum
    sum += parseFloat(num);
  }

  document.getElementById("result").textContent = `The sum is: ${sum}`;
  var  my_time = new Date();
  alert("The sum is " + sum+"\n" +"thankyou for visiting"+"\n"+my_time);

}

