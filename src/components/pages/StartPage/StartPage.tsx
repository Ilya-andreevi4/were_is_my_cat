import { Link } from "react-router-dom";

function StartPage() {
  return (
    <>
      <img
        src="./ginger_cat.png"
        alt="Settings"
        className="absolute right-[8%] -mt-24 -top-6 w-60 z-0"
      />

      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[10%] h-[50%]">
        <h1 className="mx-auto mb-6 z-10 text-6xl tracking-tighter font-bold font-sans text-white">
          Где мой кот?
        </h1>
        <h1 className="text-center z-10 mx-auto mb-10 text-2xl font-bold font-sans text-white">
          Цель игры – первым найти своего кота,
          <br />
          проявив наблюдательность и скорость реакции.
        </h1>
        <Link
          to="/PlayersPage"
          className="px-8 py-2 z-10 opacity-90 font-sans text-3xl bg-orange-500 text-white font-bold w-fit mx-auto mt-10 rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Начать
        </Link>
        <img
          src="./gray_cat.png"
          className="z-0 absolute bottom-0 left-1 w-60"
        />

        <div className="absolute bottom-5 font-mono text-sm text-center right-10 h-fit w-fit z-0">
          By Orekhov Ilya
          <br />
          for AxiomaSchool
          <br />
          2022
        </div>
      </div>
    </>
  );
}

export default StartPage;
