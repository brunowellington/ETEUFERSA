import Img1 from "../assets/images/layout1.png";
import Img2 from "../assets/images/layout2.png";
import Img3 from "../assets/images/layout3.png";
import Img11x1 from "../assets/images/layout11x1.png";
import Img21x1 from "../assets/images/layout21x1.png";
import Img31x1 from "../assets/images/layout31x1.png";
import maturacao1x1x1 from "../assets/images/maturacao/1x1x1.png";
import maturacao1x1x2 from "../assets/images/maturacao/1x1x2.png";
import maturacao1x1xn from "../assets/images/maturacao/1x1xn.png";
import maturacao2x2x1 from "../assets/images/maturacao/2x2x1.png";
import maturacao2x2x2 from "../assets/images/maturacao/2x2x2.png";
import maturacao2x2xn from "../assets/images/maturacao/2x2xn.png";
import maturacaonxnx1 from "../assets/images/maturacao/nxnx1.png";
import maturacaonxnx2 from "../assets/images/maturacao/nxnx2.png";
import maturacaonxnxn from "../assets/images/maturacao/nxnxn.png";

type MappedImages = {
  proporcao1x1: Record<number, string>;
  proporcaonx1: Record<number, string>;
  maturacao: Record<number, string>;
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
  maturacao: {
    1: maturacao1x1x1,
    2: maturacao1x1x2,
    3: maturacao1x1xn,
    4: maturacao2x2x1,
    5: maturacao2x2x2,
    6: maturacao2x2xn,
    7: maturacaonxnx1,
    8: maturacaonxnx2,
    9: maturacaonxnxn,
  }
};
