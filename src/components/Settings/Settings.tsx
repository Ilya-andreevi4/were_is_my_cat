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
          ? "fixed top-0 left-0 z-40 min-h-screen h-[100%] bg-stone-400 bg-opacity-40 min-w-full"
          : "hidden"
      }
      onClick={() => setActive(false)}
    >
      <div
        className="grid grid-cols-1 gap-1 mt-5 z-50 text-blue-700 text-xl leading-loose  justify-items-end font-sans font-bold text-center px-6 py-3 border-blue-700 border-2 rounded-xl bg-white w-fit h-fit mx-auto my-auto transition-opacity-1 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="bg-[url('./cancel.svg')] bg-contain w-8 h-8"
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
};
export default Settings;
