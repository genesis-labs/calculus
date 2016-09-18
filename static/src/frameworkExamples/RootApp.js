import Calculus from '../framework/Calculus';
import GridComponent from  '../frameworkExamples/vanillaJS/GridComponent'
// import MapComponent from ''
import gridReducer from  '../frameworkExamples/vanillaJS/GridReducer'


class RootApp{
    start(){
        let calculus = new Calculus(MapComponent, gridReducer);
        calculus.render();
    }
}

export default RootApp;