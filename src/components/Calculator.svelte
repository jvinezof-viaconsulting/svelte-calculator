<script>
  import CalculatorModel from "../model/CalculatorModel";

  import Screen from "./Screen.svelte";
  import Row from "./Row.svelte";
  import Button from "./Button.svelte";

  let calc = new CalculatorModel();

  const enteredNumber = (num) => (calc = calc.enteredNumber(num));
  const enteredOperator = (operator) => (calc = calc.enteredOperator(operator));
  const enteredDot = () => (calc = calc.enteredDot());
  const calculate = () => (calc = calc.calculate());
  const clean = () => (calc = calc.clean());
</script>

<div class="calculator">
  <Screen value={calc.value} />
  <Row>
    <Button text="AC" onClick={clean} isThird isImportant />
    <Button text="/" onClick={enteredOperator} isOperation />
  </Row>
  <Row>
    <Button text="7" onClick={enteredNumber} />
    <Button text="8" onClick={enteredNumber} />
    <Button text="9" onClick={enteredNumber} />
    <Button text="*" onClick={enteredOperator} isOperation />
  </Row>
  <Row>
    <Button text="6" onClick={enteredNumber} />
    <Button text="5" onClick={enteredNumber} />
    <Button text="4" onClick={enteredNumber} />
    <Button text="+" onClick={enteredOperator} isOperation />
  </Row>
  <Row>
    <Button text="1" onClick={enteredNumber} />
    <Button text="2" onClick={enteredNumber} />
    <Button text="3" onClick={enteredNumber} />
    <Button text="-" onClick={enteredOperator} isOperation />
  </Row>
  <Row>
    <Button text="0" onClick={enteredNumber} isHalf />
    <Button text="," onClick={enteredDot} />
    <Button text="=" onClick={calculate} isImportant />
  </Row>
</div>

<style>
  .calculator {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 220px;
    background-color: var(--bg-color);
    padding: 10px;
  }
</style>
