import _ from 'lodash';
// import Print from './print'

function component() {
// function getComponent() {
    var element = document.createElement('div');
    // const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    // element.onclick = Print.bind(null, 'Hello webpack!');
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    // element.appendChild(btn);

    return element;

    // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
    //     var element = document.createElement('div');
    //
    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //
    //     return element;
    // })
}

// getComponent().then(component => {
//     document.body.appendChild(component);
// })
//
document.body.appendChild(component());