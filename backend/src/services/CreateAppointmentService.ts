import Appointment from '../Models/Appointment';
import { startOfHour } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentsRepository';


const appointmentRepository = new AppointmentRepository();


class CreateAppointmentService {


  public execute(): Appointment {
    const appointmentDate = startOfHour(parsedDate);

    const findAppointmentInSameDate = appointmentRepository.findByDate(parsedDate);

    if (findAppointmentInSameDate) {
      return response.status(400).json({ message: 'This appointment already booked' });
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
