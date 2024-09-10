import { EntityModel } from "./entity.model";
export interface HoraryModel extends EntityModel {
    apertura?: Date;
    cierre?: Date;
    lunes?: boolean;
    martes?: boolean;
    miercoles?: boolean;
    jueves?: boolean;
    viernes?: boolean;
    sabado?: boolean;
    domingo?: boolean;
  }
  
  const weekdays = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
  ];
  
  export function mapHorarioToText(horario: HoraryModel): string {
    return weekdays
      .reduce((acu, day) => {
        if (horario[day as keyof HoraryModel]) {
          acu += `, ${day}`;
        }
        return acu;
      }, '')
      .substring(2);
  }
  
  export function getDay(
    horarios: HoraryModel[],
    dia?: keyof HoraryModel,
  ): HoraryModel | undefined {
    const day = dia ?? weekdays[new Date().getDay()];
    return horarios.find((h) => h[day as keyof HoraryModel]);
  }
  
  export function isOpen(horarios?: HoraryModel[]): boolean {
    if (!horarios) {
      return false;
    }
    const horario = getDay(horarios);
    if (!horario) {
      return false;
    }
    const date = new Date();
    const apertura = new Date();
    if (horario.apertura instanceof Date && horario.cierre instanceof Date) {
      apertura.setHours(horario.apertura!.getHours());
      apertura.setMinutes(horario.apertura!.getMinutes());
      apertura.setSeconds(0);
      const cierre = new Date();
      cierre.setHours(horario.cierre!.getHours());
      cierre.setMinutes(horario.cierre!.getMinutes());
      cierre.setSeconds(0);
      return date >= apertura && date <= cierre;
    }
    return false;
  }
  
  export function nextEvent(horarios: HoraryModel[]): Date {
    let horario = getDay(horarios);
    // TODO: Horario puede ser undefined corregir esto
    if (isOpen(horarios)) {
      return horario!.cierre! as Date;
    } else {
      let i = new Date().getDay();
      horario = undefined;
      const nextDay = weekdays[new Date().getDay() + (i > 6 ? i - 7 : i)];
      horario = getDay(horarios, nextDay as keyof HoraryModel);
      i++;
      i = i > 6 ? i - 7 : i;
      while (horario == undefined && i != new Date().getDay()) {
        const nextDay = weekdays[new Date().getDay() + (i > 6 ? i - 7 : i)];
        horario = getDay(horarios, nextDay as keyof HoraryModel);
        i++;
        i = i > 6 ? i - 7 : i;
      }
      return horario!.apertura! as Date;
    }
  }
  