import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../../components/Navigation/MainNavigation';

class Navigation extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-12">
               <section className="navigation module">
                  <MainNavigation />
               </section>
            </div>
         </div>
      );
   }

}

export default connect(null)(Navigation);
