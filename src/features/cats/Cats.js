import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      <CatList catPics={catPics} />
      {/* {status === "idle" && catPics.length > 0 ? <CatList catPics={catPics} /> : <p>Loading...</p>} */}
    </div>
  );
}

export default Cats;
