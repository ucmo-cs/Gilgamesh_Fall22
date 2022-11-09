package commercebank.appointmentscheduler.service;

import commercebank.appointmentscheduler.domain.Appointment;
import commercebank.appointmentscheduler.domain.PotentialClient;
import commercebank.appointmentscheduler.repository.AppointmentRepository;
import commercebank.appointmentscheduler.repository.PotentialClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class AppointmentService {


    private final AppointmentRepository appointmentRepository;


    @Transactional
    public Appointment create(Appointment appointment) {

        //get user name from appointment
        //check whether the user name is already in


        return appointmentRepository.save(appointment);

    }


}
