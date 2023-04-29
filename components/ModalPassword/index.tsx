const ModalPassword = () => {
  return (
    <div className="w-[110%] p-4 rounded-md bg-white absolute top-[-310%] left-[-5%] border-2 border-gray-500">
      <ul className="list-disc pl-4">
        <li>At least 8 characters long</li>
        <li>At least 1 uppercase character</li>
        <li>At least 1 lowercase character</li>
        <li>At least 1 number or special character</li>
      </ul>
    </div>
  );
};

export default ModalPassword;
