import { ReactNode, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

// Default props value.
const defaultPortalProps = {
    wrapperId: "react-portal"
}

const reactPortalWrapperStyles = `
    position: fixed;
    top: 0px;
    width: 100vw;
    display: flex;
    height: 100vh;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    align-content: center;
    justify-content: center;
`

// Define ReactPortal props
type CustomtPortalProps = {
   children: ReactNode,
   wrapperId: string
} & typeof defaultPortalProps;


const CustomPortal = ({children, wrapperId} : CustomtPortalProps) => {

   const [ wrapper, setWrapper ] = useState<Element | null>(null);
   
    // use Layout because we want React to run the callback function before repainting the dom.
   useLayoutEffect(() => {

        let element = document.getElementById(wrapperId);

        let created = false;

        if (!element) {
            created = true;
            const wrapper = document.createElement('div');
            wrapper.setAttribute("id", wrapperId);
            wrapper.setAttribute("style",reactPortalWrapperStyles);
            document.body.appendChild(wrapper);
            element = wrapper;
        }

        setWrapper(element);

        return () => {
            if (created && element?.parentNode) {
               element.parentNode.removeChild(element);
            }
        }
        
   }, [wrapperId]);

   if (wrapper === null) return null;

   return createPortal(children, wrapper);
}

CustomPortal.defaultProps = defaultPortalProps;
export default CustomPortal;