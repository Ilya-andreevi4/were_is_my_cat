import { Link } from "react-router-dom";

function StartPage() {
  return (
    <>
      <img
        src="./ginger_cat.png"
        alt="Settings"
        className="absolute left-[65%] -mt-20 -top-6 mr-min-8 mx-auto w-60 z-0"
      />

      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[10%] h-[50%]">
        <h1 className="mx-auto my-6 z-10 text-6xl tracking-tighter font-extrabold font-sans text-orange-100">
          Где мой кот?
        </h1>
        <h1 className="text-center z-10 mx-auto my-10 mb-0 text-2xl font-bold font-sans text-orange-100">
          Цель игры – первым найти своего кота,
          <br />
          проявив наблюдательность и скорость реакции.
        </h1>
        <Link
          to="/PlayersPage"
          className="px-8 py-2 z-10 font-sans text-3xl bg-orange-500 text-white font-extrabold w-fit mx-auto mt-10 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Начать
        </Link>
        <img
          src="./gray_cat.png"
          className="z-0 absolute bottom-0 left-1 w-60"
        />

        <div className="absolute bottom-5 font-mono text-sm text-center right-10 h-fit w-fit z-0">
          By Orekhov Ilya for AxiomaSchool
          <br />
          2022
        </div>
      </div>
    </>
  );
}

export default StartPage;
