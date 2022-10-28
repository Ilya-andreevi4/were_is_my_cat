import { Link } from "react-router-dom"

function NotFound() {

  return (
    <>

      <div className="flex flex-col justify-between left-0 mx-auto my-auto p-11 top-[10%] h-[50%]">
        <h1 className="mx-auto mb-6 z-10 text-4xl tracking-tighter font-extrabold font-sans text-white">
          Ошибка 404
        </h1>
        <h1 className="text-center z-10 mx-auto mb-8 text-xl font-bold font-sans text-white">
          Вы хотели найти кота, а в итоге сами потерялись...
          <br />
          Вы зашли на несуществующую страницу.
        </h1>
        <Link
          to="/"
          className="px-8 py-2 z-10 opacity-90 font-sans text-xl bg-orange-500 text-white font-extrabold w-fit mx-auto rounded-lg shadow-xl hover:bg-orange-600 hover:shadow-sm"
        >
          Вернуться на главную страницу
        </Link>
        <img
          src="./notfound_cat_1.png"
          className="z-0 absolute bottom-0 left-2 max-w-sm w-[40%]"
        />

      <img
        src="./notfound_cat_2.png"
        alt="Settings"
        className="absolute right-2 bottom-4 max-w-md w-[45%] z-0"
      />
      </div>
    </>
  )
}

export default NotFound