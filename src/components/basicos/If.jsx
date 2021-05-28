export default function IfFunction (props) {
        if(props.test) {
           return props.children; 
        }
        else {
            return false
        }
    
}