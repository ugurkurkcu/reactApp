import { useState } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };
  const handleDelete = () => {
    dispatch(deleteDataFunc(dt?.id));
    navigate(`/`);
  };

  return (
    <div className="w-[200px] h-[200px] rounded-lg m-2 relative shadow-md shadow-black ">
      <img src={dt?.url} className="w-full h-full object-cover rounded-lg " />
      <div className="bg-purple-500 absolute text-white  left-0 bottom-0 w-full rounded-b-lg flex p-2 px-3 justify-between items-center">
        <h2 className="text-lg font-bold">{dt?.name}</h2>
        <p>${dt?.price}</p>
      </div>
      <div className="absolute top-2 right-2 cursor-pointer rounded-md shadow-white shadow-inner z-10 ">
        <CgMoreVerticalAlt
          onClick={() => setOpenEdit(!openEdit)}
          color="white"
          size={24}
        />
      </div>
      {openEdit && (
        <div
          className=" flex flex-col gap-1 absolute text-lg font-bold text-white
           top-2 right-10 text-center cursor-pointer"
        >
          <div
            onClick={handleDelete}
            className="rounded-md bg-opacity-80 hover:bg-opacity-90 bg-purple-500 
            shadow-md shadow-black hover:shadow-lg hover:shadow-black p-1 "
          >
            Delete
          </div>
          <div
            onClick={handleUpdate}
            className="rounded-md bg-opacity-80 hover:bg-opacity-90 bg-purple-500 
            shadow-md shadow-black hover:shadow-lg hover:shadow-black p-1 "
          >
            Update
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
