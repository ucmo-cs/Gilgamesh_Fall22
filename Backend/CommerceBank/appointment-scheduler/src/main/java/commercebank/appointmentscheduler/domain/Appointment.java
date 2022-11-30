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
    //appointment info
    private Long id;

    private String appt_date;
    private String appt_time;
    private String reason;

    //@JoinColumn(name = "customer_id")
    //@ManyToOne

    //Client Info;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String location;
    //Location Info
//    @JoinColumn(name = "location_id")
//    @ManyToOne(cascade=CascadeType.ALL)
//    private Location location;




}