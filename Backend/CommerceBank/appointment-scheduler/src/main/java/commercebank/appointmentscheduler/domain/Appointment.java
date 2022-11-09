package commercebank.appointmentscheduler.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Calendar;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class Appointment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    //@JoinColumn(name = "customer_id")
    //@ManyToOne
    //private PotentialClient potentialClient;

    private String name;
    private String email;
    private String time;

    @JoinColumn(name = "location_id")
    @ManyToOne(cascade=CascadeType.ALL)
    private Location location;



    //private Integer location_id;
    //private Integer employee_id;
    //private Integer potential_client_id;
    //private String reason;
}
