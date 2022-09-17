
import { useNavigate } from "react-router-dom";


const page_mover = () => {

  const navigate = useNavigate();


  const movePage = (path) => {
    navigate(path);
  }

  return { movePage };

}
export { page_mover };