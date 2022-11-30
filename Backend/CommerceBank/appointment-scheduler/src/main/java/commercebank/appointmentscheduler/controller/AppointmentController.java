package commercebank.appointmentscheduler.controller;

import commercebank.appointmentscheduler.domain.Appointment;
import commercebank.appointmentscheduler.domain.Apptmnt;
import commercebank.appointmentscheduler.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@Slf4j
public class AppointmentController {

    private final AppointmentService appointmentService;

    @CrossOrigin
    @PostMapping("/appointment")
    public ResponseEntity<?> createAppointment(@RequestBody Apptmnt apptmnt){


        log.info("fname " + apptmnt.getFname());
        log.info("lname " + apptmnt.getLname());
        log.info("phone " + apptmnt.getPhone());
        log.info("email " + apptmnt.getEmail());
        log.info("service " + apptmnt.getService());
        log.info("location " + apptmnt.getLocation());
        log.info("time " + apptmnt.getTime());
        log.info("date" + apptmnt.getDate());

        Appointment appointment = new Appointment();

        appointment.setReason(apptmnt.getService());
        appointment.setAppt_time(apptmnt.getTime());
        appointment.setEmail(apptmnt.getEmail());
        appointment.setFirstName(apptmnt.getFname());
        appointment.setLastName(apptmnt.getLname());
        appointment.setPhoneNumber(apptmnt.getPhone());
        appointment.setLocation(apptmnt.getLocation());
        appointment.setAppt_date(apptmnt.getDate());


        return new ResponseEntity<>(appointmentService.create(appointment), HttpStatus.CREATED);
//        return null;
    }

//    @GetMapping("/appointment")
//    public ResponseEntity<?> getAppointment(@RequestBody Appointment appointment) {
//        return new ResponseEntity<>(appointmentService.getByName(appointment), HttpStatus.OK);
//    }

//    @GetMapping("/appointment/{id}")
//    public ResponseEntity<?> getAppointmentByID(@RequestBody Appointment appointment){
//        return new ResponseEntity<>(appointmentService.getById(long id), HttpStatus.OK);
//    }

//    @DeleteMapping("/appointment/{id}")
//    public ResponseEntity<?> delete(@RequestBody Appointment appointment){
//        return new ResponseEntity<>(appointmentService.delete(appointment.getId()), HttpStatus.OK);
//    }
}