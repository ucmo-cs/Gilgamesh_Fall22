package commercebank.appointmentscheduler.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    //@Column(name = "employee_id")
    private Long id;

    private String last_name;
    private String first_name;
    private String email;
    private Integer location_id;

    //@JoinColumn(name = "location_id")
//    private Location location;
}