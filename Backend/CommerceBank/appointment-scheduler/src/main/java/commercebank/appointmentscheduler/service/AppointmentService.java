package commercebank.appointmentscheduler.service;

import commercebank.appointmentscheduler.domain.Appointment;
import commercebank.appointmentscheduler.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    @Transactional
    public Appointment create(Appointment appointment) {

        // get username from appointment
        // check whether the username is already in

        return appointmentRepository.save(appointment);

    }

}