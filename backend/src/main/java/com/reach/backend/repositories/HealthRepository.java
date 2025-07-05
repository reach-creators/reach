package com.reach.backend.repositories;

import com.reach.backend.domain.HelloWorld;
import java.time.OffsetDateTime;
import org.springframework.stereotype.Repository;

@Repository
public class HealthRepository {

  public HelloWorld getHelloWorld() {
    return new HelloWorld("Hello World", OffsetDateTime.now());
  }
}
