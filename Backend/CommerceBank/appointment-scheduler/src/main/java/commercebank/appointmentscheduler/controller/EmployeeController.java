package commercebank.appointmentscheduler.controller;

import commercebank.appointmentscheduler.domain.Employee;
import commercebank.appointmentscheduler.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class EmployeeController {

        private final EmployeeService employeeService;

//        @GetMapping("/employees")
//        public ResponseEntity<?> getEmployees(){
//
//            return new ResponseEntity<>(EmployeeService.getAll(), HttpStatus.OK);
//        }

//        @GetMapping("/employees/{id}")
//        public ResponseEntity<?> getEmployeesById(@PathVariable(value = "id") long id){
//            return new ResponseEntity<>(new Employee(employeeService.getByID(id)), HttpStatus.OK);
//        }

//        @PostMapping("/employee")
//        public ResponseEntity<?> createEmployee(@RequestBody Employee employee){
//            return new ResponseEntity<>(new Employee(employeeService.create(employee)), HttpStatus.CREATED)
//        }

//        @PutMapping("/employee/{id}")
//        public ResponseEntity<?> update Employee(@PathVariable(value = "id") long id, @RequestBody Employee employee){
//            return new ResponseEntity<>(new Employee((EmployeeService.update(id, employee)), HttpStatus.ACCEPTED));
//        }
//
//        @DeleteMapping("/employee/{id}")
//        public ResponseEntity<?> deleteEmployee(@PathVariable(value = "id") long id){
//            return new ResponseEntity<>("Deleted employee: " + id);
//        }


}