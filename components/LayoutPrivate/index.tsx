import SideNav from '../SideNav';
import TopBar from '../TopBar';

const LayoutPrivate = ({ children }) => {
  return (
    <div className="flex bg-color-gray-dark">
      <SideNav />

      <div className="w-full">
        <TopBar />
        <div className="h-[calc(100%-70px)] bg-color-gray-light p-4 border-color-gray-dark border-t-2 border-l-2 rounded-tl-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPrivate;
