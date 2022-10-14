import { Link } from "react-router-dom";

function StartPage() {
  return (
    <>
      <div className="fixed left-[65%] -mt-56 mr-min-8 mx-auto w-80 z-0">
        <img src="./ginger_cat.png" alt="Settings" className="block z-0" />
      </div>
      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[5%] h-[50%]">
        <h1 className="mx-auto my-5 text-8xl tracking-tighter font-extrabold font-sans text-orange-100">
          Где мой кот?
        </h1>
        <h1 className="mx-auto mt-5 mb-0 text-4xl font-bold font-sans text-orange-100">
          Выберите количество игроков
        </h1>
        <select
          defaultValue={1}
          name="selectNumberOfPlayers"
          className="w-fit mx-auto mb-4 mt-0 px-4 py-2 font-sans text-2xl font-bold rounded-lg bg-orange-100"
        >
          <option value={1}>1</option>
          <option value={2}> 2 </option>
          <option value={3}> 3 </option>
          <option value={4}> 4 </option>
        </select>
        <Link
          to="/PlayersPage"
          className="px-14 py-4 font-sans text-4xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-2 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Начать
        </Link>
        <div className="fixed top-[60%] left-10 h-20 w-fit z-0">
          <img src="./gray_cat.png" className="z-0"></img>
        </div>
      </div>
    </>
  );
}

export default StartPage;
