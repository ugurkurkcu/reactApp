import { AiOutlineFolderAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex  justify-between items-center py-2 px-3 text-white bg-purple-600">
      <Link to={'/'} className="text-2xl font-bold font-serif">REACT APP</Link>
      <div className="flex gap-3 items-center">
        <div className=" text-black ">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-8 px-2 py-1 rounded-lg"
            name="sorting"
            id=""
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-8 px-2 py-1 rounded-lg text-black"
          type="text"
          placeholder="search"
        />

        <div onClick={() => dispatch(modalFunc())}>
          <AiOutlineFolderAdd
            size={24}
            className="bg-purple-800 shadow-md  h-8 w-8 rounded-lg p-1 transition-all 
            duration-200 hover:outline hover:bg-purple-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
