import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoasBaseData } from "../types/LagoasBaseData";

type WriteInCanvasProps = {
  image: HTMLImageElement | null;
  canvas: HTMLCanvasElement | null;
  lagoasBaseData: LagoasBaseData;
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
};

export const writeInCanvas = ({
  image,
  canvas,
  lagoasBaseData,
  lagoaAnaerobia,
  lagoaFacultativa,
}: WriteInCanvasProps) => {
  if (image && canvas) {
    if (canvas != null) {
      const ctx = canvas.getContext("2d") as any;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 1100, 440);
      ctx.drawImage(image, 0, 0, 1100, 440);
      if (lagoasBaseData.proporcao === 1) {
        if (lagoasBaseData.quantidadeLagoas === 1) {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 170);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 310, 195);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 760, 140);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 870, 224);
          ctx.font = "bold 18px Roboto";
        } else if (lagoasBaseData.quantidadeLagoas === 2) {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 235, 130);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 310, 155);
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 330);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 310, 300);
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 750, 65);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 870, 152);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 750, 395);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 870, 305);
        } else {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 82);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 310, 115);
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 267);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 310, 350);
          ctx.font = "bold 18px Roboto";
          if (lagoasBaseData.quantidadeLagoas > 9) {
            ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 280, 334);
          } else {
            ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 285, 334);
          }
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 790, 20);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 870, 108);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 790, 267);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 870, 355);
          ctx.font = "bold 18px Roboto";
          ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 826, 368);
        }
      } else {
        if (lagoasBaseData.quantidadeLagoas === 1) {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 170);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 195);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 760, 140);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 945, 224);
          ctx.font = "bold 18px Roboto";
        } else if (lagoasBaseData.quantidadeLagoas === 2) {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 235, 130);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 155);
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 330);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 300);
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 750, 65);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 935, 152);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 750, 395);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 935, 305);
        } else {
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 185, 82);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 115);
          ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 185, 267);
          ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 350);
          ctx.font = "bold 18px Roboto";
          ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 303, 321);
          ctx.font = `14px Roboto`;
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 790, 20);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 935, 108);
          ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 790, 267);
          ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 935, 355);
          ctx.font = "bold 18px Roboto";
          ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 841, 354);
        }
      }
    }
  }
};
