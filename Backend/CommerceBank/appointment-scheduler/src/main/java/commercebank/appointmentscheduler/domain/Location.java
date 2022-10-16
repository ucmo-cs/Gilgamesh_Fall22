package commercebank.appointmentscheduler.domain;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="location")
public class Location{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String STREET_ADDRESS;
    private String city;
    private String state;
    private Integer zipCode;
}