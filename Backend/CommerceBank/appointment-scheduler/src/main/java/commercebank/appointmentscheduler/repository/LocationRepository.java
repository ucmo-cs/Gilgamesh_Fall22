package commercebank.appointmentscheduler.repository;

import  commercebank.appointmentscheduler.domain.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {  }