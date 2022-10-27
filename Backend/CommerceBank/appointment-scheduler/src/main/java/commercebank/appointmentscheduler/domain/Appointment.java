package commercebank.appointmentscheduler.domain;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.Calendar;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Appointment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;



    @JoinColumn(name = "customer_id")
    @ManyToOne
    private PotentialClient potentialClient;


    @JoinColumn(name = "location_id")
    @ManyToOne
    private Location location;

    //private Integer location_id;
    //private Integer employee_id;
    //private Integer potential_client_id;
    //private String reason;
}
