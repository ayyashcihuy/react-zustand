import { bearStore } from "../../store"

export function BearCounter() {
    const { bearsPopulation } = bearStore();

    const bearCreator = (bear: number) => {
        return "🐻".repeat(bear)
    } 

    return (
        <div>
            {
            bearsPopulation === 0 ? 
                <div className="text-3xl">
                    No Bear Appear 😥
                </div> : 
                <div>
                    Bear = {bearCreator(bearsPopulation)} appear 😁
                </div>
            } 
        </div>
    )
}