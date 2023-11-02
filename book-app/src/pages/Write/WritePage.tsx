import { DiaryEntry, Mainlayout } from "../../assets"
import DiaMain from "../../components/Resueables/DiaMain"
import DiaQuotes from "../../components/Resueables/DiaQuotes"


const WritePage = () => {
  return (
    <Mainlayout>
      <DiaMain />
   <DiaryEntry />
   <DiaQuotes />
    </Mainlayout>
  )
}

export default WritePage

