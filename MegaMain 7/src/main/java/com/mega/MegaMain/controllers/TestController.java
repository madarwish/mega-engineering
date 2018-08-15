/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mega.MegaMain.controllers;

import com.mega.MegaMain.dto.UsersDTO;
import com.mega.MegaMain.entities.Orders;
import com.mega.MegaMain.entities.Users;
import com.mega.MegaMain.service.OrdersService;
import com.mega.MegaMain.service.UsersService;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@Autowired
	UsersService userService;

	@Autowired
	OrdersService orderService;

	@RequestMapping("/getUser/{email}")
	public UsersDTO getUser(@PathVariable String email) {
		return userService.findByEmail(email);
	}

	@RequestMapping("/getAll")
	public List<UsersDTO> getAll() {
		return userService.findAll();
	}

	@RequestMapping("/getCurrentUser")
	public UsersDTO currentUserName(Principal principal) {
		if(principal!=null) {
			System.out.println(userService.findByEmail(principal.getName()).getPassword()+"111111111111111111111111111");
			return userService.findByEmail(principal.getName());
		} else {
			UsersDTO user = new UsersDTO();
			return user;
		}
	}

	@RequestMapping("/addUser")
	@ResponseBody
	public String addUser(@RequestBody Users user) {
		try {
			userService.registerNewUserAccount(user);
		} catch (Exception e) {
			return e.getClass() + "Error";
		}
		return "True";
	}
	
	@RequestMapping("/updateUser")
	@ResponseBody
	public String updateUser(@RequestBody Users user) {
		try {
			userService.saveUser(user);
		} catch (Exception e) {
			return e.getClass() + "Error";
		}
		return "True";
	}

	@RequestMapping("/addOrder")
	@ResponseBody
	public Boolean addOrder(@RequestBody Orders order) {
		orderService.saveOrder(order);
		return true;
	}
}
