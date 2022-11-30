package commercebank.appointmentscheduler.domain;

import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
public class Location{
//
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    //@Column(name= "location_id")
    private Long id;
//
//    private String street_address;
//    private String city;
//    private String state;
//    private Integer zipCode;
//
//    //@OneToMany(mappedBy = "location")
//    //private List<Appointment> appointments = new ArrayList<>();
//
//
//    //Employee info
//    //@JoinColumn(name = "employee_id")
//    @OneToMany
//    private List<Employee> employee;
}