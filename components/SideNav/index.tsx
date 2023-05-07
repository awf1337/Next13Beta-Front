import { v4 as uuid } from 'uuid';

import { nextPrivateRoutes } from '../../private.routes';
import Logo from '../Logo';

const SideNav = () => {
  return (
    <div className="h-screen px-[20px] bg-color-gray-dark flex flex-col items-center">
      <Logo className="h-[70px] text-color-white mb-4" />

      {nextPrivateRoutes.map((eachElem) => {
        return (
          <div className="sideNav-icon group" key={uuid()}>
            <i className="material-icons" style={{ fontSize: '36px' }}>
              {eachElem.googleName}
            </i>

            <span className="sideNav-tooltip group-hover:scale-100">
              {eachElem.route.slice(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
