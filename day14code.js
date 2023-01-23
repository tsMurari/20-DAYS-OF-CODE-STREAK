<!DOCTYPE html>
<html>
<body>

<p>Enter a number:</p>

<input type="text" id="num1">

<p>Enter another number:</p>

<input type="text" id="num2">

<button onclick="calculate()">Calculate</button>

<script>
function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 + num2;
  console.log("The sum of " + num1 + " and " + num2 + " is " + result);
}
</script>

</body>
</html>
