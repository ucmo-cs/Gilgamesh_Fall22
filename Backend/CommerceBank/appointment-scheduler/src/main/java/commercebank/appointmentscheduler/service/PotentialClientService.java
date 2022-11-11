package commercebank.appointmentscheduler.service;

import commercebank.appointmentscheduler.domain.PotentialClient;
import commercebank.appointmentscheduler.repository.PotentialClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PotentialClientService {

      private final PotentialClientRepository potentialClientRepository;

      public PotentialClient create(PotentialClient potentialClient) { return potentialClientRepository.save(potentialClient); }
      //public PotentialClient delete(PotentialClient potentialClient) { return potentialClientRepository.delete(potentialClient);}

}