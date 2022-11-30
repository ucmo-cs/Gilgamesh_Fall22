package commercebank.appointmentscheduler.service;

import commercebank.appointmentscheduler.domain.*;
import commercebank.appointmentscheduler.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

//    public Appointment getByName(Appointment appointment) {
//        return appointmentRepository.findByName(appointment.getLastName());
//    }
////    public Optional<Appointment> getById(Appointment appointment) {
////        return appointmentRepository.findById(appointment.getId());
////    }

    @Transactional
    public Appointment create(Appointment appointment) {

        //get username from appointment
        //check whether the username is already in
//        if (getByName(appointment) != null) {
            return appointmentRepository.save(appointment);
//        }
//        else {
//            System.out.println("An appointment for: " + appointment.getFirstName() + " " + appointment.getLastName() + " already exists");
//            return null;
//        }

    }

    @Transactional
    public void delete(long id){
        appointmentRepository.deleteById(id);
    }
}

