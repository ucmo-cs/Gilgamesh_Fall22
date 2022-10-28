package commercebank.appointmentscheduler.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class PotentialClient {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name= "customer_id")
    private Long id;

    private String last_name;
    private String first_name;
    private String email;

    @OneToMany(mappedBy = "potentialClient")
    private List<Appointment> appointments = new ArrayList<>();

}
