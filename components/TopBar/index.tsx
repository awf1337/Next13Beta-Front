const TopBar = () => {
  return (
    <div className="text-white w-full h-[70px] select-none flex items-center bg-color-gray-light border-b-2 border-l-2 rounded-bl-2xl border-color-gray-dark px-4">
      <div className="flex-1 flex items-center">Dashboard</div>
      <div className="items-center justify-center flex hover:text-color-primary h-fit">
        <i
          className="material-icons-outlined cursor-pointer"
          style={{ fontSize: '36px' }}
        >
          account_circle
        </i>
      </div>
    </div>
  );
};

export default TopBar;
