// HOC.js

import React, {Component} from 'react';

/*
export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    } 
}
*/

export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            console.log(this.state.data);
            let ttt = {...this.props};
            console.log(ttt);
        return (
              <div>
                <HocComponent data={this.state.data} {...this.props} /> {/* ...this.props used to get children if any */}
              </div>
            );
        }
    } 
}