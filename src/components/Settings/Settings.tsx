import { FC } from "react";

interface SettingsProps {
  active: boolean;
  setActive: any;
  children: any;
}

const Settings: FC<SettingsProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={
        active
          ? " absolute top-0 left-0 z-40 min-h-screen h-[100%] bg-stone-400 bg-opacity-40 min-w-full"
          : "hidden"
      }
      onClick={() => setActive(false)}
    >
      <div
        className="grid grid-cols-1 gap-3 mt-5 z-50 text-blue-700 text-xl leading-loose justify-between font-sans font-bold text-center px-10 py-4 border-blue-700 border-2 rounded-xl bg-white w-fit h-fit mx-auto my-auto transition-opacity-1 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default Settings;
