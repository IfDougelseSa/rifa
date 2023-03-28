package com.cortezdevelopers.rifa.resources;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cortezdevelopers.rifa.entities.Winner;

@RestController
@RequestMapping(value = "/winners")
public class WinnerResource {

	@GetMapping
	public ResponseEntity<Winner> findWinner() {
		Winner winner = new Winner(1L, "testando");
		return ResponseEntity.ok().body(winner);
	}

}
