/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mega.MegaMain.service;

import com.mega.MegaMain.dto.OrdersDTO;
import com.mega.MegaMain.dto.UsersDTO;
import com.mega.MegaMain.entities.Orders;
import com.mega.MegaMain.entities.Users;
import com.mega.MegaMain.repositories.UsersRepository;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

	@Autowired
	private UsersRepository usersRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private Authentication auth = SecurityContextHolder.getContext().getAuthentication();

	public List<UsersDTO> findAll() {
		return convertToDto(usersRepository.findAll());
	}

	public UsersDTO findByEmail(String email) {
		return convertToDto(usersRepository.findByEmail(email));
	}

	public void saveUser(Users user) throws MySQLIntegrityConstraintViolationException {
		usersRepository.save(user);
	}

	public UsersDTO getCurrentUser() {
		return findByEmail(auth.getName());
	}

	@Transactional
    public Users registerNewUserAccount(Users accountDto)  {
		
		if(emailExist(accountDto.getEmail())) {
			return null;
		}
         
        Users user = new Users();    
        user.setFirstName(accountDto.getFirstName());
        user.setLastName(accountDto.getLastName());
        user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
        user.setEmail(accountDto.getEmail());
        user.setMobile(accountDto.getMobile());
        user.setRole("ROLE_USER");
        
        return usersRepository.save(user);       
    }

	private boolean emailExist(String email) {
		Users user = usersRepository.findByEmail(email);
		if (user != null) {
			return true;
		}
		return false;
	}

	private UsersDTO convertToDto(Users user) {
		UsersDTO userDTO = new UsersDTO();
		userDTO.setEmail(user.getEmail());
		userDTO.setFirstName(user.getFirstName());
		userDTO.setId(user.getId());
		userDTO.setLastName(user.getLastName());
		userDTO.setMobile(user.getMobile());
		userDTO.setPassword(user.getPassword());
		userDTO.setRole(user.getRole());

		List<OrdersDTO> ordersDTO = new ArrayList<>();
		for (Orders order : user.getOrdersSet()) {
			OrdersDTO orderDTO = new OrdersDTO();
			orderDTO.setComments(order.getComments());
			orderDTO.setCreationDate(order.getCreationDate());
			orderDTO.setId(order.getId());
			orderDTO.setName(order.getName());
			orderDTO.setStatus(order.getStatus());
			orderDTO.setAttachment(order.getAttachment());
			orderDTO.setFormData(order.getFormData());
			ordersDTO.add(orderDTO);
		}
		userDTO.setOrders(ordersDTO);
		return userDTO;
	}

	private List<UsersDTO> convertToDto(List<Users> usersEntitys) {
		List<UsersDTO> usersDTO = new ArrayList<>();
		for (Users user : usersEntitys) {
			UsersDTO userDTO = new UsersDTO();
			userDTO.setEmail(user.getEmail());
			userDTO.setFirstName(user.getFirstName());
			userDTO.setId(user.getId());
			userDTO.setLastName(user.getLastName());
			userDTO.setMobile(user.getMobile());
			userDTO.setPassword(user.getPassword());
			userDTO.setRole(user.getRole());

			List<OrdersDTO> ordersDTO = new ArrayList<>();
			for (Orders order : user.getOrdersSet()) {
				OrdersDTO orderDTO = new OrdersDTO();
				orderDTO.setComments(order.getComments());
				orderDTO.setCreationDate(order.getCreationDate());
				orderDTO.setId(order.getId());
				orderDTO.setName(order.getName());
				orderDTO.setStatus(order.getStatus());
				orderDTO.setAttachment(order.getAttachment());
				orderDTO.setFormData(order.getFormData());
				ordersDTO.add(orderDTO);
			}
			userDTO.setOrders(ordersDTO);
			usersDTO.add(userDTO);
		}
		return usersDTO;
	}
}
