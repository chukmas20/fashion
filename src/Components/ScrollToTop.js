import {useWindowScroll} from "react-use";
import {useEffect, useState} from "react";

const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll();
    const [visibility, setVisibilty] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibilty(true);
        }else{
            setVisibilty(false)
        }
    }, [pageYOffset]);
    
    const scrollToTop =()=> window.scrollTo({top: 0, behavior: "smooth"})

    if(!visibility){
        return false;
    }
    return (
        <div className="scroll-to-top cursor-pointer text-center" onClick={scrollToTop}>
             <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTop;
