import { bearStore } from "../../store";

export function ButtonPopulation() {
    const { bearsPopulation, increase, decrease } = bearStore()

    function handleIncrement() {
        increase(1)
    }

    function handleDecrement() {
        if (bearsPopulation === 0) {
            return;
        }
        
        decrease(1)
    }

    return (
        <div>
            <button onClick={(handleIncrement)}> Increase </button>
            <button onClick={(handleDecrement)}> Decrease </button>
        </div>
    )
}