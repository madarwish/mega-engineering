package com.mega.MegaMain.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/register").setViewName("home");
        registry.addViewController("/service/**").setViewName("home");
        registry.addViewController("/aboutUs").setViewName("home");
        registry.addViewController("/contactUs").setViewName("home");
        registry.addViewController("/FAQ").setViewName("home");
        registry.addViewController("/forms/**").setViewName("home");
        registry.addViewController("/myOrders").setViewName("home");
        registry.addViewController("/myProfile").setViewName("home");
        registry.addViewController("/what-we-do").setViewName("home");
        registry.addViewController("/how-we-work").setViewName("home");
        registry.addViewController("/our-projects").setViewName("home");
    }

}