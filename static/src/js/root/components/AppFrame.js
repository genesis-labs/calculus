// import React, {Component, PropTypes} from 'react';
// // import { connect } from 'react-redux';
// // import IndexComponent from '../../../frameworkExamples/vanillaJS/IndexComponent';
// // import VisualizationComponent from '../../../framework/VisualizationComponent';
// import MapComponent from '../../../frameworkExamples/sagi/map/MapComponent'
// import GridComponent from '../../../frameworkExamples/sagi/grid/GridComponent'
// import VisualizationContainer from '../../../frameworkExamples/sagi/VisualizationContainer'
//
// class AppFrame extends Component{
//     render(){
//         // const {dispatch, indexReducer} = {...this.props};
//         return (
//             <div>
//                 <h1>Dashboard</h1>
//                 <VisualizationContainer component={GridComponent} componentState = {{
//                     componentType:'grid',
//                     report: 'x',
//                     data:{cord:[{lat:13, lng:42}]},
//                 }}/>
//                 <VisualizationContainer component={MapComponent} componentState = {{
//                     componentType:'map',
//                     report: 'x',
//                     data:{cord:[{lat:71, lng:62}]},
//                 }}/>
//                 <VisualizationContainer component={MapComponent} componentState = {{
//                     componentType:'map',
//                     report: 'y',
//                     data:{cord:[{lat:15, lng:23}]},
//                 }}/>
//                 {/*<VisualizationComponent component={IndexComponent}/>*/}
//                 {/*<VisualizationComponent component={MapComponent} {...this.props} />*/}
//             </div>
//         )}
// }
//
// // const mapStateToProps = (state) => {
// //     return {
// //         indexReducer: state.indexReducer
// //     }
// // };
// //
// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //     }
// // };
//
//
// // export default connect(mapStateToProps)(AppFrame);
//
// export default AppFrame;