import * as DependencyOfCalculator from './DependencyOfCalculator';

function Calculator() {
}

Calculator.sum = (v1, v2) => v1 + DependencyOfCalculator.add(v2);

export default Calculator;
