import { LagoaAnaerobia } from "../types/LagoaAnaerobia";
import { LagoaFacultativa } from "../types/LagoaFacultativa";
import { LagoaMaturacao } from "../types/LagoaMaturacao";
import { LagoasBaseData } from "../types/LagoasBaseData";

type WriteInCanvasProps = {
  image: HTMLImageElement | null;
  canvas: HTMLCanvasElement | null;
  lagoasBaseData: LagoasBaseData;
  lagoaAnaerobia: LagoaAnaerobia;
  lagoaFacultativa: LagoaFacultativa;
  lagoaMaturacao?: LagoaMaturacao;
  maturacaoCalculated: boolean
};

export const writeInCanvas = ({
  image,
  canvas,
  lagoasBaseData,
  lagoaAnaerobia,
  lagoaFacultativa,
  lagoaMaturacao,
  maturacaoCalculated
}: WriteInCanvasProps) => {
  if (image && canvas) {
    if (canvas != null) {
      const ctx = canvas.getContext("2d") as any;
      const quantidadeLagoasMaturacao = lagoaMaturacao?.quantidadeLagoasMaturacao || 1
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 1100, 440);
      ctx.drawImage(image, 0, 0, 1100, 440);

      if (lagoasBaseData.proporcao === 1) {
        if (maturacaoCalculated && lagoaMaturacao) {
          if (lagoasBaseData.quantidadeLagoas === 1) {
            if (quantidadeLagoasMaturacao === 1) {
              
            } else if(quantidadeLagoasMaturacao === 2) {
              
            } else {

            }
          } else if (lagoasBaseData.quantidadeLagoas === 2) {
            if (quantidadeLagoasMaturacao === 1) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 310, 110);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 310, 340);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 415, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 415, 310);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 650, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 650, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 800, 70);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 800, 390);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 100);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 287);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 330);
            } else if (quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 120);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 330);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 300);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 50);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 400);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 665, 80);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 665, 370);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 113);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 278);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 113);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 278);
              ctx.font = `12px Roboto`;
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 830, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 830, 300);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 990, 145);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 990, 315);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 130);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 330);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 300);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 55);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 400);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 650, 80);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 650, 370);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 115);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 275);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 930, 115);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 930, 275);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 810, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 810, 295);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 1010, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 1010, 295);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 990, 162);
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 990, 325);
            }
          } else {
            if (quantidadeLagoasMaturacao === 1) {
              
            } else if(quantidadeLagoasMaturacao === 2) {
              
            } else {

            }
          }
        } else {
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
        }
      } else {
        if (maturacaoCalculated && lagoaMaturacao) {
          if (lagoasBaseData.quantidadeLagoas === 1) {
            if (quantidadeLagoasMaturacao === 1) {
              
            } else if(quantidadeLagoasMaturacao === 2) {
              
            } else {

            }
          } else if (lagoasBaseData.quantidadeLagoas === 2) {
            if (quantidadeLagoasMaturacao === 1) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 310, 110);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 310, 340);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 415, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 415, 310);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 650, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 650, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 800, 70);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 800, 390);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 100);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 287);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 330);
            } else if (quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 120);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 330);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 300);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 50);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 400);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 665, 80);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 665, 370);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 113);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 278);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 113);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 278);
              ctx.font = `12px Roboto`;
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 830, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 830, 300);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 990, 145);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 990, 315);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 130);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 330);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 155);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 290, 300);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 55);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 500, 400);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 650, 80);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 650, 370);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 115);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 275);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 930, 115);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 930, 275);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 810, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 810, 295);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 1010, 135);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 1010, 295);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 990, 162);
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 990, 325);
            }
          } else {
            if (quantidadeLagoasMaturacao === 1) {
              
            } else if(quantidadeLagoasMaturacao === 2) {
              
            } else {

            }
          }
        } else {
          if (lagoasBaseData.quantidadeLagoas === 1) {
            ctx.font = `14px Roboto`;
            ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 230, 170);
            ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 110, 225);
            ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 760, 140);
            ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 945, 225);
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
  }
};
