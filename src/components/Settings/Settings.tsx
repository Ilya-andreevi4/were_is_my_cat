import { FC } from "react";

interface SettingsProps {
  active: boolean;
  setActive: any;
  children: any;
}

 const Settings: FC<SettingsProps> = ({active, setActive, children}) => {
  return (
      <div className={active ? "fixed top-0 left-0 z-100 min-h-full bg-stone-400 bg-opacity-40 min-w-full" : "disable pointer-events-none"} onClick={() => setActive(false)}>
          <div className={active ? "container mt-[15%] text-blue-700 text-4xl leading-loose justify-between font-mono font-bold text-center px-20 py-4 border-blue-700 border-4 rounded-2xl bg-white w-fit h-fit mx-auto my-auto transition-opacity-1 opacity-100" : "opacity-0 disable"} onClick={e => e.stopPropagation()}>
              {children}
          </div>
      </div>
  )
}
export default Settings
