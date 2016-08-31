import Calculus from '../framework/Calculus';
import GridComponent from  '../frameworkExamples/vanillaJS/GridComponent'
import gridReducer from  '../frameworkExamples/vanillaJS/GridReducer'


class RootApp{

    constructor(){
        this.start = this.start.bind(this);
    }

    start(){
        let calculus = new Calculus(GridComponent, gridReducer);
        calculus.render()
    }
}

export default RootApp;