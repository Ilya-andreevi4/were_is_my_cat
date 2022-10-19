import { Link } from "react-router-dom";

function StartPage() {
  return (
    <>
      <div className="left-[65%] -mt-56 mr-min-8 mx-auto w-80 z-0">
        <img src="./ginger_cat.png" alt="Settings" className="block z-0" />
      </div>
      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[10%] h-[50%]">
        <h1 className="mx-auto my-16 text-8xl tracking-tighter font-extrabold font-sans text-orange-100">
          Где мой кот?
        </h1>
        <h1 className="text-center mx-auto my-10 mb-0 text-3xl font-bold font-sans text-orange-100">
        Цель игры – первым найти своего кота,
        <br/>
        проявив наблюдательность и скорость реакции.
        </h1>
        <Link
          to="/PlayersPage"
          className="px-14 py-4 font-sans text-4xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-24 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Начать
        </Link>
        <div className=" top-[60%] left-10 h-20 w-fit z-0">
          <img src="./gray_cat.png" className="z-0 "></img>
        </div>
        <div className=" top-[90%] font-mono text-xl text-center right-10 h-20 w-fit z-0">
          By Orekhov Ilya for AxiomaSchool<br/>
          2022
        </div>
      </div>
    </>
  );
}

export default StartPage;
