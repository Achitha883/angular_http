import React ,{ Component }  from 'react';
import NewImg from './NewImg';

let BaseComponent = (ModifiedComponent) => class extends Component {
    render(){
        return(
            <div>
                <h2> This is Base Component</h2>
                <ModifiedComponent/>
            </div>
        );
    }
}

// const Button = () => {
//     return(
//         <h4>This is Button</h4>
//     );
// }
let NewButton = BaseComponent(NewImg);

class HOC extends Component{
    render(){
        return(
            <div>
                Hello
                <NewButton/>
            </div>
        );
    }
}

export default HOC;