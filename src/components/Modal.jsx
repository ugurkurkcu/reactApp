import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content }) => {
  const dispatch = useDispatch();

  return (
    <div
      className=" z-20 fixed left-0 right-0 bottom-0 top-0 flex
    w-full h-screen justify-center items-center bg-black bg-opacity-50"
    >
      <div className="w-1/3 min-w-[300px] bg-white rounded-lg  shadow-md p-3 shadow-black">
        <div className="flex justify-between border-b p-2 items-center">
          <h1 className="text-xl">{title}</h1>
          <IoMdCloseCircle onClick={() => dispatch(modalFunc())} size={24} />
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
