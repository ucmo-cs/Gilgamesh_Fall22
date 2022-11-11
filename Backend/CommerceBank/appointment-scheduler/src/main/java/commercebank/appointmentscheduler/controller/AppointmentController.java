package commercebank.appointmentscheduler.controller;

import commercebank.appointmentscheduler.domain.Appointment;
import commercebank.appointmentscheduler.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@Slf4j
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping("/appointment")
    public ResponseEntity<?> creatAppointment(@RequestBody Appointment appointment){

        System.out.println("firstname " + appointment);
        log.info("Street " + appointment.getLocation().getStreet_address());
        log.info("City " + appointment.getLocation().getCity());
        log.info("State " + appointment.getLocation().getState());

        return new ResponseEntity<>(appointmentService.create(appointment), HttpStatus.CREATED);

    }

}