import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './style.scss';

const MainNavigation = props => {
   let navClasses = classNames({
      'main-nav': true,
      'navigation-visible': null
   });

   return (
      <nav className={navClasses}>
         <ul>
            <li>
               <NavLink to="/panel" exact={true}>
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-home" />
                     </div>
                     <span>ホーム画面</span>
                  </div>
               </NavLink>
            </li>
            <li>
               <NavLink to="/panel/singletransfer">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-clipboard" />
                     </div>
                     <span>gebiezhuangzhang</span>
                  </div>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
