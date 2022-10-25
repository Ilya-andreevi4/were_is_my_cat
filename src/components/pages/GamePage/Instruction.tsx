import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useActions } from "../../../services/hooks/actions";

export default function Instruction() {
  const { instructionOff } =
  useActions();

  return (
    <>
    <button className="fixed top-7 right-4 bg-[url('./cancel.svg')] bg-contain w-6 h-6" onClick={()=>instructionOff()}/>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-3 my-4 px-4">
            <h1 className="text-xl">Инструкция к игре:</h1>
            {/* <div className="grid grid-cols-2 gap-3 my-4"> */}
            <h2 className="text-left px-4">
              Первый игрок, нажав на кнопку "Сходить", выбрасывает 3 кубика.
              <br />
              <br />
              1. Кубик отвечает за позу кота
              <br />
              2. Кубик отвечает за цвет кота
              <br />
              3. Кубик отвечает за то, есть ли у кота пятна или полоски, или их
              нет
              <br />
              <br />
              <span className="text-md text left">
                Если вам трудно разобрать, что выпавшие кубики означают, можно
                нажать на них и выплывут подсказки.
              </span>
            </h2>
            {/* <div className="bg-black w-10 h-10" /> */}
            {/* </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-3 max-w-[80%] my-4 px-4">
            <h2 className="text-left">
              Все участники одновременно начинают искать нужного персонажа на
              картах.
              <br />
              <br />
              Как только один из игроков находит кота с подходящими свойствами,
              он нажимает на карту с ним. Затем выбранная карта переворачивается
              и показывает свои свойства.
              <br />
              <br />
              Символы на обороте карты кота должны совпадать с символами на
              кубиках.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 gap-3 max-w-[80%] my-4 px-4">
            <h2 className="text-left">
              Если игрок оказался прав, он получает 1 балл, а карта найденного
              кота исчезает.
              <br />
              Следующий по списку игрок бросает 3 кубика. Начинается новый
              раунд.
              <br />
              <br />
              Только один из 27 котов обладает всеми тремя выброшенными на
              кубиках свойствами.
              <br />
              Цель игры – первым собрать как можно больше котов.
              <br />
              Ты играешь один? Ну тогда просто собери всех котов.
              <br />
              Удачи и весёлой игры!
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
