import Achievements from "../components/Achievements";
import Dataform from "../components/Dataform";
import Header from "../components/Header";
import Tablecomponent from "../components/Tablecomponent";
import Timer from "../components/Timer";

export function Home(){
    return (
        <>
            <Header />
            {/* <Achievements />
            <Tablecomponent /> */}
            <Dataform />
            <Timer />
        </>
    )
}
