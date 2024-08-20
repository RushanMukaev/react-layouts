import { useState } from 'react';
import { CardsView } from "./CardsView";
import { ListView } from "./ListView";
import { IconSwitch } from "./IconSwitch";
import styles from "./store.module.css"

export const Store = () => {
    
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
    
    let icon = "view_list"
    let render = <CardsView cards={products}/>

    const [iconActual, setIconActual] = useState(icon);
    const [renderActual, setRenderActual] = useState(render);
    
    function onSwitch() {
        if(iconActual === "view_list") {
            setIconActual("view_module")
            setRenderActual(<ListView cards={products}/>)
        } else if((iconActual === "view_module")){
            setIconActual("view_list")
            setRenderActual(<CardsView cards={products}/>)
        }
    }
    

    return (
        <>
            <div className={styles["icon"]}>
                <IconSwitch
                icon={iconActual}
                onSwitch={onSwitch}/>
            </div>
                
            {renderActual}
        </>
    )
}

