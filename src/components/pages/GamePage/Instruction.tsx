import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Instruction = () => {
  console.log("Instruction render");
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="grid grid-cols-1 gap-3 my-4 px-4 justify-center">
          <h1 className="text-xl">Инструкция к игре:</h1>
          <div className="grid grid-cols-1 my-4">
            <h2 className="flex-auto text-left px-2">
              Первый игрок, нажав на кнопку "Сходить", выбрасывает 3 кубика.
            </h2>
            <div className="flex my-4">
              <h2 className="flex-auto my-auto text-left">
                Один кубик отвечает за позу кота
                <br />
                Второй кубик отвечает за цвет кота
                <br />
                Третий кубик отвечает за то, есть ли у кота пятна или полоски,
                или их нет
              </h2>
              <div className="flex-none bg-center relative h-80 w-40 mr-6 my-auto">
                <img src="./instruction_2.png" alt="" className="" />
              </div>
            </div>
            <h2 className="flex-auto text-left px-2">
              Если вам трудно разобрать, что означают выпавшие кубики, можно
              нажать на кубики и выплывут подсказки.
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex max-w-[80%] my-4 px-4">
          <h2 className="flex-auto text-left">
            Все участники одновременно начинают искать нужного персонажа на
            картах.
            <br />
            <br />
            Как только один из игроков находит кота с подходящими свойствами, он
            нажимает на карту с ним. Затем выбранная карта переворачивается и
            показывает свои свойства.
            <br />
            <br />
            Символы на обороте карты кота должны совпадать с символами на
            кубиках.
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[90%] mx-8 my-8">
          <img
            src="./instruction_3.png"
            alt="Игровое поле"
            className="h-fit cursor-pointer active:scale-110 border-2 border-gray-400"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex max-w-[80%] my-4 px-4">
          <h2 className="flex-auto text-left">
            Если игрок оказался прав, он получает 1 балл, а карта найденного
            кота исчезает.
            <br />
            Следующий по списку игрок бросает 3 кубика. Начинается новый раунд.
            <br />
            <br />
            Только один из 27 котов обладает всеми тремя выброшенными на кубиках
            свойствами.
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
  );
};
export default Instruction;
