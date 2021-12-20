const CLEAN_SCREEN = true;
const DONT_CLEAN_SCREEN = false;

class CalculatorModel {
  #value
  #accumulator
  #cleanScreen
  #operator

  constructor(value = null, accumulator = null, operator = null, cleanScreen = false) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#operator = operator;
    this.#cleanScreen = cleanScreen;
  }

  get value() {
    return this.#value?.replace('.', ',') || '0';
  }

  enteredNumber(newValue) {
    let value = (this.#cleanScreen || !this.#value) ? newValue : this.#value + newValue;

    return new CalculatorModel(
      value,
      this.#accumulator,
      this.#operator,
      DONT_CLEAN_SCREEN
    );
  }

  enteredDot() {
    let value = this.#value?.includes('.') ? this.#value : this.#value + '.';

    return new CalculatorModel(
      value,
      this.#accumulator,
      this.#operator,
      DONT_CLEAN_SCREEN
    );
  }

  enteredOperator(nextOperator) {
    return this.calculate(nextOperator);
  }

  calculate(nextOperator = null) {
    const accumulator = !this.#operator
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operator} ${this.#value}`);
    const value = !this.#operator ? this.#value : `${accumulator}`;

    return new CalculatorModel(
      value,
      accumulator,
      nextOperator,
      nextOperator ? CLEAN_SCREEN : DONT_CLEAN_SCREEN
    )
  }

  clean() {
    return new CalculatorModel();
  }
}

export default CalculatorModel;
