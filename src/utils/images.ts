import Img1 from "../assets/images/layout1.png";
import Img2 from "../assets/images/layout2.png";
import Img3 from "../assets/images/layout3.png";
import Img11x1 from "../assets/images/layout11x1.png";
import Img21x1 from "../assets/images/layout21x1.png";
import Img31x1 from "../assets/images/layout31x1.png";

type MappedImages = {
  proporcao1x1: Record<number, string>;
  proporcaonx1: Record<number, string>;
};

export const mappedImages: MappedImages = {
  proporcao1x1: {
    1: Img11x1,
    2: Img21x1,
    3: Img31x1,
  },
  proporcaonx1: {
    1: Img1,
    2: Img2,
    3: Img3,
  },
};
