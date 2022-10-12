import Dataform from "../components/Dataform";
import Header from "../components/Header";
import Tablecomponent from "../components/Tablecomponent";


export function Home(){
    return (
        <>
            <Header />
            {/* <Achievements />
            <Tablecomponent /> */}
            <Tablecomponent />
            <Dataform />
        </>
    )
}
