package commercebank.appointmentscheduler.service;


import commercebank.appointmentscheduler.domain.Employee;
import commercebank.appointmentscheduler.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.beans.Transient;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee getById(long id){

        if(id > 0) {
            Optional<Employee> employee = employeeRepository.findById(id);
            if (employee.isPresent()) {
                return employee.get();
            }
            else{
                return new ResponseStatusException(HttpStatus.NOT_FOUND, "No employee with id " + id)
            }
        }
        else
            return null;
        }

    public List<Employee> getAll(){
        List<Employee> employees = employeeRepository.findAll();
        return employees;
    }

    @Transactional
    public Employee create(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee update(long employeeId, Employee employee){
        employee.setId(employeeId);
        return EmployeeRepository.save(employee);
    }

    public void delete(long id){
        employeeRepository.deleteById(id);
    }
    }


