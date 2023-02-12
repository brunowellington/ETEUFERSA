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
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 158);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 316, 190);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 108);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 700, 140);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 850, 175);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 950, 205);
            } else if(quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 130, 165);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 220, 190);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 410, 120);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 545, 150);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 670, 180);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 180);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 205);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 760, 205);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 115, 165);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 220, 200);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 400, 128);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 540, 160);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 660, 180);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 890, 180);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 743, 205);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 980, 205);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 963, 236);
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
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 375, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 375, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 450, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 450, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 630, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 630, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 740, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 740, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 800, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 800, 310);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 875, 105);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 875, 340);
              ctx.font = "bold 18px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 427, 315);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 703, 353);
            } else if(quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 305, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 305, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 380, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 380, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 560, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 560, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 670, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 670, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 860, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 305);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 860, 305);
              ctx.font = "bold 18px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 360, 312);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 640, 350);
              ctx.font = `12px Roboto`;
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 805, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 940, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 805, 325);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 940, 325);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 280, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 280, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 645, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 645, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 700, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 700, 305);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 305);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 780, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 780, 325);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 325);
              ctx.font = "bold 20px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 327, 316);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 610, 354);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 955, 114);
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 955, 352);
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
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 210, 158);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 316, 190);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 108);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 700, 140);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 850, 175);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 950, 205);
            } else if(quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 130, 165);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 220, 190);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 410, 120);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 545, 150);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 670, 180);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 880, 180);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 205);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 760, 205);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 115, 165);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 220, 200);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 400, 128);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 540, 160);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 660, 180);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 890, 180);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 743, 205);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 980, 205);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 963, 236);
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
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 375, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 375, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 450, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 450, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 630, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 630, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 740, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 740, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 800, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 800, 310);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 875, 105);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 875, 340);
              ctx.font = "bold 18px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 427, 315);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 703, 353);
            } else if(quantidadeLagoasMaturacao === 2) {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 305, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 305, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 380, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 380, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 560, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 560, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 670, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 670, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 860, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 730, 305);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 860, 305);
              ctx.font = "bold 18px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 360, 312);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 640, 350);
              ctx.font = `12px Roboto`;
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 805, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 940, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 805, 325);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 940, 325);
            } else {
              ctx.font = `14px Roboto`;
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 280, 80);
              ctx.fillText(`${lagoaAnaerobia.BAnaerobia} m`, 280, 355);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 105);
              ctx.fillText(`${lagoaAnaerobia.LAnaerobia} m`, 350, 330);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 30);
              ctx.fillText(`${lagoaFacultativa.BFacultativa} m`, 530, 420);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 645, 50);
              ctx.fillText(`${lagoaFacultativa.LFacultativa} m`, 645, 395);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 700, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 70);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 700, 305);
              ctx.fillText(`${lagoaMaturacao?.comprimentoMaturacao} m`, 900, 305);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 780, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 90);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 780, 325);
              ctx.fillText(`${lagoaMaturacao?.larguraMaturacao} m`, 970, 325);
              ctx.font = "bold 20px Roboto";
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 327, 316);
              ctx.fillText(`${lagoasBaseData.quantidadeLagoas}`, 610, 354);
              ctx.font = "bold 14px Roboto";
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 955, 114);
              ctx.fillText(`${quantidadeLagoasMaturacao}`, 955, 352);
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
