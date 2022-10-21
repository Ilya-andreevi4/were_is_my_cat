import { FC } from "react";
import { useAppSelector } from "../../../services/hooks/redux";
import Settings from "../../Settings/Settings";

interface ScoringProps {
  active: boolean;
  setActive: any;
}

const Scoring: FC<ScoringProps> = ({ active, setActive }) => {
  const { players } = useAppSelector((state) => state.gameReducers);
  return (
    <>
    </>
  );
};
export default Scoring;
