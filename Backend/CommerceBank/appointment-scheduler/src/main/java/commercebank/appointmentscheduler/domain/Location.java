package commercebank.appointmentscheduler.domain;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Location{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String street_address;
    private String city;
    private String state;
    private Integer zipCode;
}