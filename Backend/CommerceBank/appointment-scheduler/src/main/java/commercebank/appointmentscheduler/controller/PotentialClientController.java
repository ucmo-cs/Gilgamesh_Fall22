package commercebank.appointmentscheduler.controller;


import commercebank.appointmentscheduler.domain.PotentialClient;
import commercebank.appointmentscheduler.service.PotentialClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PotentialClientController {

    //fetch , axios
    //fetch("http://localhost:8080/customer", {method:POST})
    //GetMapping  //
    //PostMapping // /appointment
    // GetMapping            // customers/{1}/appointments/{2}

    private final PotentialClientService potentialClientService;

    @PostMapping("/customer")
    public ResponseEntity<?> createClient(@RequestBody PotentialClient potentialClient){

        System.out.println("firstname " + potentialClient.getFirst_name());

        return new ResponseEntity<>(potentialClientService.create(potentialClient), HttpStatus.CREATED);


    }

}
